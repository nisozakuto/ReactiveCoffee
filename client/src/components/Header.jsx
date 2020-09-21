import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <Link to="/"><a href="/">Reactive Coffee</a></Link>
                        <Link to="/"><a href="/">Home</a></Link>
                        <Link to="/"><a href="/orders">Orders</a></Link>
                    </ul>
                </nav>
            </header>
        )
    }
}
