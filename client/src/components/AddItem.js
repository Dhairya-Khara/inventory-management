import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Form from './Form'
import Header from './Header'

class AddItem extends React.Component {
    constructor(props) {
        super(props)
    }

    callAPI = async ({ description, createdAt, stock, note, image }) => {
        // console.log(description)
        const id = uuidv4()
        // const url = "http://localhost:8080/createItem?name=" + encodeURIComponent(description) + "&createdAt="
        //     + encodeURIComponent(createdAt) + "&stock=" + encodeURIComponent(stock) + "&note=" + encodeURIComponent(note) + "&id="
        //     + encodeURIComponent(id)
        // console.log(url)

        // const req = new Request(url, {
        //     method: "POST"
        // })

        // await fetch(req)
        let formData = new FormData()

        formData.append('image', image)
        formData.append('name', description)
        formData.append('createdAt', createdAt)
        formData.append('stock', stock)
        formData.append('note', note)
        formData.append('id', id)

        const url = "http://localhost:8080/createItem"
        // const req = new Request(url, {
        //     method: "POST",
        //     body: formData
        // })
        // await fetch(req)
        await fetch(url, {method: "POST", body: formData})
    }

    render() {
        return (
            <div>
                <Header />
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Item</h1>
                    </div>
                </div>
                <div className="content-container">
                    <Form onSubmit={(item) => {


                        this.callAPI(item)
                        //time out is set because database needs to be updated BEFORE going to dashboard. Else, outdated dashboard is rendered even if database is updated
                        setTimeout(() => {
                            this.props.history.push('/')
                        }, 50)


                    }} />
                </div>
            </div>
        )
    }
}

export default AddItem