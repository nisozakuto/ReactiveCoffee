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

    getCoffeeDetails(order_id) {
        fetch(`/coffee_orders/${order_id}`, {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
            .then(res => res.json())
            .then((res) => {
                console.log("getCoffeeDetails", res)

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
        //Get this to work
    }

    render() {
        return (
            <div className="profile">
                {this.state.data ?
                    (
                        <>
                            <h4 id="logout">Logout</h4>
                            <h1 className="title">Welcome, {this.state.data.user.username}</h1>
                            <h2>Your Active Orders</h2>
                            <ul>
                                {
                                    this.state.data.active_order ?
                                        (
                                            <li key={this.state.data.active_order.id}>Order ID: {this.state.data.active_order.id}</li>
                                        )
                                        :
                                        <h4>You do not have any open orders</h4>
                                }
                            </ul>

                            <h3>Past Orders</h3>
                            <ul>
                                {
                                    this.state.data.orders.map(order =>
                                        (
                                            <li key={order.id}>
                                                <h4 onClick={() => this.getCoffeeDetails(order.id)}>ID - {order.id}</h4>
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
