import React from 'react'

import Item from './Item'



class ItemList extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            items: [],

        }

        this.getItems()


    }

    getItems = async () => {


        await fetch('http://localhost:8080/getItems').then(async (response, error) => {
            response.json().then((data, error) => {
                for (let i = 0; i < data.length; i++) {
                    this.setState((previousState) => ({ items: previousState.items.concat(data[i]) }))
                }
            })

        })
    }

    render() {

        return (

            <div className="content-container">
                <h3>If the data is not updated, please refresh the page.</h3>
                <div className="list-header">
                    <div className="show-for-mobile">Expenses</div>
                    <div className="show-for-desktop">Items</div>
                    <div className="show-for-desktop">Quantity</div>
                </div>

                <div className='list-body'>
                    {this.state.items.map((item) => {
                        return <Item key={item.id} props={item} />
                    })}
                </div>
            </div>
        )
    }
}

export default ItemList