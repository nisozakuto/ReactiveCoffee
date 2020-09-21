import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <h1><span role="img" aria-label="sheep">☕️</span></h1>
                        <Link to="/"><a href="/">Home</a></Link>
                        <Link to="/orders"><a href="/orders">Orders</a></Link>
                    </ul>
                </nav>
            </header>
        )
    }
}
