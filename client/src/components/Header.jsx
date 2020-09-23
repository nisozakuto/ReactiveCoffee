import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <div className="site-menu">
                            <p><span role="img" aria-label="sheep">☕️</span></p>
                            <Link to="/">Home</Link>
                            <Link to="/coffees">Coffees</Link>
                        </div>
                        {Auth.isUserAuthenticated() ?
                            <div className="user-menu">
                                <Link to="/profile">Profile</Link>
                            </div>
                            :
                            <div className="user-menu">
                                <Link to="/profile">Sign up</Link>
                                <Link to="/profile">Log in</Link>
                            </div>
                        }
                    </ul>
                </nav>
            </header >
        )
    }
}
