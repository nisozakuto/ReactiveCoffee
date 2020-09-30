import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Auth from '../../modules/Auth'
export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            data: null,
            ordersData: null,
            usrid: null,
            coffeeOrdersData: null,
            coffeeDetail: null,

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
                    data: res,
                })
            })
    }

    // createANewOrder() {
    //     fetch('/profile', {
    //         headers: {
    //             token: Auth.getToken(),
    //             'Authorization': `Token ${Auth.getToken()}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log("RES", res)
    //             this.setState({
    //                 usrid: res.user.id
    //             })
    //             console.log("usrid", this.state.usrid)
    //             console.log("data", this.data)
    //             if (this.state.data.active_order == null) {
    //                 console.log("No orders here")
    //                 if (Auth.isUserAuthenticated()) {
    //                     fetch('/orders',
    //                         {
    //                             method: 'POST',
    //                             headers: {
    //                                 'Content-Type': 'application/json',
    //                                 'token': Auth.getToken(),
    //                                 'Authorization': `Token ${Auth.getToken()}`
    //                             },
    //                             body: JSON.stringify({
    //                                 'user_id': this.state.usrid,
    //                                 //make sure there is only one open order
    //                             })
    //                         })
    //                 }
    //             }
    //             this.getData()
    //         })
    // }

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

    getCoffeeOrdersDetails(order_id) {
        fetch(`/coffee_orders/${order_id}`, {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    coffeeOrdersData: res
                })
                console.log("coffeeOrdersData", this.state.coffeeOrdersData)
            })
    }

    getCoffeeDetails(coffee_id) {
        fetch(`/coffees/${coffee_id}`, {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
            .then(res => res.json())
            .then((res) => {
                console.log("coffee detail", res)
                this.setState({
                    coffeeDetail: res
                })
                console.log("coffeeDetail", this.state.coffeeDetail)
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
                            <section className="active-orders">
                                <h3>Your Active Orders</h3>
                                <ul>
                                    {
                                        this.state.data.active_order ?
                                            (
                                                <>
                                                    <li key={this.state.data.active_order.id} onClick={() => this.getCoffeeOrdersDetails(this.state.data.active_order.id)}>Order ID: {this.state.data.active_order.id}</li>

                                                </>
                                            )
                                            :
                                            (
                                                <>
                                                    <h4>You do not have any open orders</h4>
                                                    <form onSubmit={(evt => this.props.createANewOrder(evt))}>
                                                        <input type="submit" value="Create a new order" />
                                                    </form>
                                                </>
                                            )
                                    }
                                </ul>
                            </section>
                            <section className="past-orders">
                                <h3>Past Orders</h3>
                                <ul>
                                    {
                                        this.state.data.orders.map(order =>
                                            (
                                                <li key={order.id} onClick={() => this.getCoffeeOrdersDetails(order.id)}>Order ID: {order.id}</li>
                                            ))
                                    }
                                </ul>
                            </section>
                            <section className="order-details">
                                <h4>Coffee Order</h4>
                                <div className="orders-div">
                                    {this.state.coffeeOrdersData ?
                                        (
                                            this.state.coffeeOrdersData.coffeeorder.map((coffeeorder) =>
                                                (
                                                    <div className="one-order">
                                                        <div>
                                                            <p>Order id: {coffeeorder.order_id} </p>
                                                        </div>
                                                        <div>
                                                            {this.state.coffeeDetail ?

                                                                <>
                                                                    <img src={this.state.coffeeDetail.coffee.short_url} alt="" width="100px" />

                                                                </>
                                                                :
                                                                <></>
                                                            }
                                                            <p onClick={() => { this.getCoffeeDetails(coffeeorder.coffee_id) }}>Ordered Coffee #: {coffeeorder.coffee_id}</p>
                                                            <p>Quantity id: {coffeeorder.quantity} </p>
                                                            <p>Size: {coffeeorder.size} </p>
                                                        </div>
                                                    </div>
                                                )
                                            )
                                        )
                                        :
                                        <p>loading</p>
                                    }
                                </div>

                            </section>
                        </>
                    )
                    :
                    <p>Loading</p>
                }
                {!Auth.isUserAuthenticated() && <Redirect to="/login" />}
            </div >
        )
    }
}
