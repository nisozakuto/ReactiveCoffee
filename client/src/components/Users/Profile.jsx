import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Auth from '../../modules/Auth'
export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            data: null,
            ordersData: null
        }
    }

    componentDidMount() {
        this.getData()
        this.ordersData()
    }

    getData() {
        fetch('/profile', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                })
            })
    }

    ordersData() {
        fetch('/orders', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    ordersData: res
                })
            })
    }

    logout() {
        fetch('/logout', {
            method: 'POST'
        })
    }

    render() {
        return (
            <div className="profile">
                {this.state.data ?
                    (
                        <>
                            <h4 id="logout">Logout</h4>
                            <h1 className="title">Welcome, {this.state.data.user.username}</h1>
                            <ul>
                                {
                                    this.state.data.orders.map(order =>
                                        (
                                            <li key={order.id}>
                                                <h4>ID{order.id}</h4>
                                            </li>
                                        ))
                                }
                            </ul>
                        </>
                    )
                    :
                    <p>Loading</p>
                }
                { !Auth.isUserAuthenticated() && <Redirect to="/login" />}
            </div >
        )
    }
}
