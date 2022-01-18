import React from 'react'
import {  Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="content-container" >
                        <div className="header__content">
                            <Link to="/" className="header__title">
                                <h1>Inventory Management</h1>
                            </Link>

                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header