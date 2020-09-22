import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <h1><span role="img" aria-label="sheep">☕️</span></h1>
                        <Link to="/">Home</Link>
                        <Link to="/orders">Orders</Link>
                    </ul>
                </nav>
            </header>
        )
    }
}
