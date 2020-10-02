import React, { Component } from 'react'
import Auth from '../modules/Auth'

export default class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffeeOrdersData: null,
        }
    }

    componentDidMount() {
        if (this.props.selectedOrder)
            this.getCoffeeOrdersDetails(this.props.selectedOrder)
    }

    getCoffeeOrdersDetails = (order_id) => {
        console.log('profile', order_id)
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

    render() {
        return (
            <div>
                <h1>Orders Page</h1>
                {console.log("order", this.props)}
                {
                    this.props.selectedCoffee ?
                        <>
                            <h1>Ny</h1>
                            <p>{this.props.selectedCoffee.id}</p>
                            <p>{this.props.selectedCoffee.name}</p>
                            <p>{this.props.selectedCoffee.category}</p>
                            <p>{this.props.selectedCoffee.flavor}</p>
                            <img src={this.props.selectedCoffee.short_url} alt={this.props.selectedCoffee.name} />
                        </>
                        :
                        <>Something went wrong, go back.</>
                }

                {this.props.selectedOrder ?
                    <>
                        <h2>Selecter Order: {this.props.selectedOrder}</h2>
                        <form className="details-main-form" onSubmit={(e) => this.props.handleOrderFormSubmit(e, this.state.id, this.state.size, this.state.quantity, this.state.order_id)} >
                            <label>
                                Size (oz):
                            < input
                                    type="number"
                                    name="size"
                                    placeholder="8 Oz"
                                    min="1" max="20"
                                    value={this.state.coffeeOrdersData.coffeeorder[0].size}
                                    onChange={this.handleInputChange} />
                            </label>
                            <label>
                                Quantity:
                        <input
                                    type="number"
                                    name="quantity"
                                    placeholder="1"
                                    min="1" max="10"
                                    value={this.state.coffeeOrdersData.coffeeorder[0].quantity}
                                    onChange={this.handleInputChange} />
                            </label>
                            <input type="submit" id="add-to-cart" value="Add to Order" />
                        </ form >
                    </>
                    :
                    <p>No orders here</p>
                }
            </div>
        )
    }
}
