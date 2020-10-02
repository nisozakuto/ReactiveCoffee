import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Auth from '../../modules/Auth'
import OrderHelper from './OrderHelper'
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            ordersData: null,
            userId: null,
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

    getCoffeeOrdersDetails = (e, order_id) => {
        e.preventDefault()
        console.log("called")
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
                this.setState({
                    coffeeDetail: res
                })
            })
    }

    render() {
        return (
            <div className="profile">
                {this.state.data ?
                    (
                        <>
                            <h4 id="logout" onClick={() => { this.props.logoutUser() }}>Logout</h4>
                            <h1 className="title">Welcome, {this.state.data.user.username}</h1>
                            <section className="active-orders">
                                <h3>Your Active Orders</h3>
                                <ul>
                                    {
                                        this.state.data.active_order ?
                                            (
                                                <div className="single-order-box">
                                                    <div className="single-order-box-info">
                                                        <li key={this.state.data.active_order.id} onClick={() => this.getCoffeeOrdersDetails(this.state.data.active_order.id)}>Order ID: {this.state.data.active_order.id}</li>
                                                        <form className="order-forms" onSubmit={(evt => this.props.editOrder(evt))}>
                                                            <input type="submit" value="Edit Order" />
                                                        </form>
                                                        <form className="order-forms" onSubmit={(e) => this.getCoffeeOrdersDetails(e, this.state.data.active_order.id)}>
                                                            <input type="submit" value="View Order" />
                                                        </form>
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <div className="single-order-box">
                                                    <h4>You do not have any open orders</h4>
                                                    <form onSubmit={(evt => this.props.createANewOrder(evt))}>
                                                        <input type="submit" value="Create a new order" />
                                                    </form>
                                                </div>
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
                                                <OrderHelper order={order} getCoffeeOrdersDetails={this.getCoffeeOrdersDetails} />

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
                { !Auth.isUserAuthenticated() && <Redirect to="/login" />}
            </div >
        )
    }
}

// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import Auth from '../../modules/Auth'
// export default class Profile extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data: null,
//             ordersData: null,
//             userId: null,
//             coffeeOrdersData: null,
//             coffeeDetail: null,
//         }
//     }

//     componentDidMount() {
//     }

//     render() {
//         return (
//             <div className="profile">
//                 {this.props.profileData ?
//                     (
//                         <>

//                             <h4 id="logout" onClick={() => { this.props.logoutUser() }}>Logout</h4>
//                             <h1 className="title">Welcome, {this.props.profileData.user.username}</h1>
//                             <section className="active-orders">
//                                 <h3>Your Active Orders</h3>
//                                 <ul>
//                                     {
//                                         this.props.profileData.active_order ?
//                                             (
//                                                 <div className="single-order-box">
//                                                     <div className="single-order-box-info">
//                                                         <h3>Order ID: {this.props.profileData.active_order.id}</h3>
//                                                         <li key={this.props.profileData.active_order.id} onClick={() => { this.props.editOrder(this.props.profileData.active_order.id) }}>Edit Order</li>
//                                                         <li className="order-forms" key={this.props.profileData.active_order.updated_at} onClick={() => { this.props.viewOrder(this.props.profileData.active_order.id) }}>View Order</li>
//                                                     </div>
//                                                 </div>
//                                             )
//                                             :
//                                             (
//                                                 <div className="single-order-box">
//                                                     <h4>You do not have any open orders</h4>
//                                                     <form onSubmit={(evt => this.props.createANewOrder(evt))}>
//                                                         <input type="submit" value="Create a new order" />
//                                                     </form>
//                                                 </div>
//                                             )
//                                     }
//                                 </ul>
//                             </section>
//                             <section className="past-orders">
//                                 <h3>Past Orders</h3>
//                                 <ul>
//                                     {
//                                         this.props.profileData.orders.map(order =>
//                                             (
//                                                 <div className="single-order-box" >
//                                                     <div className="single-order-box-info">
//                                                         <h3>Order ID: {order.id}</h3>
//                                                         <li key={order.id} onClick={() => { this.props.editOrder(order.id) }}>Edit Order</li>
//                                                         <li className="order-forms" key={order.updated_at} onClick={() => { this.props.viewOrder(order.id) }}>View Order</li>
//                                                     </div>
//                                                     <div>
//                                                         <li className="delete-button" key={order.id} onClick={() => { this.props.deleteOrder(order.id) }}>Delete Order</li>
//                                                     </div>
//                                                 </div>
//                                             ))
//                                     }
//                                 </ul>
//                             </section>
//                             <section className="order-details">
//                                 <h4>Coffee Order</h4>
//                                 <div className="orders-div">
//                                     {this.props.state.coffeeOrdersData ?
//                                         (
//                                             this.props.state.coffeeOrdersData.coffeeorder.map((coffeeorder) =>
//                                                 (
//                                                     <div className="one-order">
//                                                         <div>
//                                                             <p>Order id: {coffeeorder.order_id} </p>
//                                                         </div>
//                                                         <div>
//                                                             {this.props.state.coffeeDetail ?

//                                                                 <>
//                                                                     <img src={this.props.state.coffeeDetail.coffee.short_url} alt="" width="100px" />
//                                                                 </>
//                                                                 :
//                                                                 <></>
//                                                             }
//                                                             <p onClick={() => { this.getCoffeeDetails(coffeeorder.coffee_id) }}>Ordered Coffee #: {coffeeorder.coffee_id}</p>
//                                                             <p>Quantity id: {coffeeorder.quantity} </p>
//                                                             <p>Size: {coffeeorder.size} </p>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             )
//                                         )
//                                         :
//                                         <p>loading</p>
//                                     }
//                                 </div>

//                             </section>
//                         </>
//                     )
//                     :
//                     <p>No data</p>
//                 }
//                 { !Auth.isUserAuthenticated() && <Redirect to="/login" />}
//             </div >
//         )
//     }
// }
