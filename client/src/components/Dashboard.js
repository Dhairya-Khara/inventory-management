import React from 'react'
import { Link } from 'react-router-dom'

import ItemList from './ItemList'
import Header from './Header'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div>
                <Header />
                
                <div className="page-header">
                    <div className="content-container">
                        <div className="page-header__actions">
                            <Link to="/dashboard/create">
                                <button className="button" onClick={this.createExpense}>Add Item</button>
                            </Link>
                        </div>
                    </div>

                </div>


                <ItemList />
            </div>
        )
    }
}

export default Dashboard
