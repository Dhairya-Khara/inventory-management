import React from 'react'

import Form from './Form'
import Header from './Header'

class EditItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            stock: 0,
            createdAt: 0,
            note: "",
        }

    }


    render() {
        return (
            <div>
                <Header />
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Item</h1>
                    </div>
                </div>
                {/* Item form with info from the api call is rendered */}
                <div className="content-container">
                    <Form editItem={true} id={this.props.match.url.substring(19, this.props.match.url.length)} />
                </div>

            </div>
        )
    }
}

export default EditItem