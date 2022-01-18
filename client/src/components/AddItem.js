import React from 'react'


import Form from './Form'
import Header from './Header'

class AddItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            errorState: false
        }
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
                    <Form addItem={true} />
                </div>
            </div>
        )
    }
}

export default AddItem