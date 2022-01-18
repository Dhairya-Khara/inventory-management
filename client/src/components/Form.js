import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import { withRouter, Link } from 'react-router-dom'
import { parse, v4 as uuidv4 } from 'uuid'

class ItemForm extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            id: 0,
            description: "",
            note: "",
            stock: "",
            createdAt: moment(),
            calendarFocused: false,
            errorState: "",
            selectedFile: null,
            changedImage: false,
            imageError: false,

        }

        if (props.editItem) {
            this.getInfoOfIndividualItemFromAPI()
        }
    }

    //method handling the state change of description
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description
            }
        })
    }

    //method handling the state change of note box
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            }
        })
    }

    //method handling the state change of amount text box
    onStockChange = (e) => {
        const stock = e.target.value;
        if (!stock || stock.match(/^[0-9]*$/)) {
            this.setState(() => {
                return { stock }
            })
        }

    }

    //method handling the state change of date picker
    onDateChange = (createdAt) => {
        this.setState(() => {
            if (createdAt) {
                return {
                    createdAt
                }
            }

        })
    }

    //method handling the state change of calendar widget
    onFocusChange = ({ focused }) => {
        this.setState(() => {
            return {
                calendarFocused: focused
            }
        })
    }

    onFileChange = event => {
        this.setState({
            selectedFile: event.target.files[0],
            changedImage: true
        })
    }

    onEditItem = async () => {
        const id = this.state.id

        const formData = new FormData()
        formData.append("name", this.state.description)
        formData.append("stock", this.state.stock)
        formData.append("createdAt", moment(this.state.createdAt).unix() * 1000)
        formData.append("note", this.state.note)
        formData.append("id", id)

        if (this.state.selectedFile !== null) {

            formData.append("image", this.state.selectedFile)
        }

        const url = "/updateItem"

        try {
            await fetch(url, { method: "PATCH", body: formData })
        }
        catch (e) {

        }
    }

    onRemoveItem = () => {
        const id = this.state.id
        let url = "/deleteItem?id=" + encodeURIComponent(id)
        let req = new Request(url, {
            method: "POST"
        })

        fetch(req).then((response, error) => {
            if (error) {
                console.log(error)
            }
        })

        setTimeout(() => {
            this.props.history.push("/")
        }, 50)


    }




    onAddItem = async () => {
        const id = uuidv4()

        let formData = new FormData()
        if (this.state.selectedFile) {
            formData.append('image', this.state.selectedFile)
        }
        formData.append('name', this.state.description)
        formData.append('createdAt', moment(this.state.createdAt).unix() * 1000)
        formData.append('stock', this.state.stock)
        formData.append('note', this.state.note)
        formData.append('id', id)

        const url = "/createItem"

        try {
            await fetch(url, { method: "POST", body: formData })
        }
        catch (e) {

        }
    }

    //method handling the submission of the expense form
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.stock) {
            this.setState(() => {
                return {
                    errorState: "Please provide a description and quantity."
                }
            })
        }
        else if (this.state.selectedFile !== null && ((this.state.selectedFile.type !== "image/png" && this.state.selectedFile.type !== "image/jpg" && this.state.selectedFile.type !== "image/jpeg")
            || this.state.selectedFile.size > 5000000)) {
            this.setState(() => {
                return {
                    errorState: "Please provide an image less than 5 MB."
                }
            })
        }



        else {
            if (this.props.addItem) {
                this.onAddItem()
                setTimeout(() => {
                    this.props.history.push("/")
                }, 50)


            }

            if (this.props.editItem) {
                this.onEditItem()

                setTimeout(() => {
                    this.props.history.push("/")
                }, 50)
            }
        }
    }


    getInfoOfIndividualItemFromAPI = () => {

        //expense id stores the id of the individual expense that needs to be editted
        const id = this.props.id


        let url = "/singleItem?id=" + encodeURIComponent(id)


        let req = new Request(url, {
            method: "GET",

        })
        fetch(req).then(async (response, error) => {
            if (error) {
                console.log(error)
                return
            }
            const parseResponse = await response.json()
            //after getting information from database, store it in react state
            this.setState(() => {
                return ({
                    id: id,
                    description: parseResponse[0].name,
                    stock: parseResponse[0].stock,
                    createdAt: moment(parseResponse[0].createdAt),
                    note: parseResponse[0].note,
                })

            })
        })

    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        return (
            <div>
                {/* The main form of this page. Information will already be filled if editting item */}
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.errorState ? <p className="form__error">{this.state.errorState}</p> : <p></p>}
                    <input className="text-input" value={this.state.description} placeholder="Item" type="text" autoFocus onChange={this.onDescriptionChange}></input>
                    <input className="text-input" value={this.state.stock} placeholder="Stock" type="text" onChange={this.onStockChange}></input>
                    <br></br>
                    <SingleDatePicker

                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => {
                            return false;
                        }}
                    />
                    <br></br>
                    <textarea className="text-area" value={this.state.note} placeholder="Add a note for your item (optional)" onChange={this.onNoteChange}></textarea>


                    <input type="file" onChange={this.onFileChange} />
                    <div>

                        <button className="button">{this.props.editItem ? "Edit Item" : "Add Item"}</button>

                    </div>





                </form>

                {/* Only render the RemoveExpense button if the form is rendered while for editting purposes */}
                {this.props.editItem ? <button className="button button--secondary" onClick={this.onRemoveItem}>Remove Item</button> : false}
            </div>
        )
    }
}

export default withRouter(ItemForm)