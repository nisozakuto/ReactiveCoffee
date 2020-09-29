// import React, { useState } from 'react'
// import Auth from '../../modules/Auth'

// const AddOrder = () => {
//     const [coffee_id, setcoffeeId] = useState('')
//     const [size, setSize] = useState('')
//     const [quantity, setQuantity] = useState('')
//     const [order_id, setOrder_id] = useState('')
//     return (
//     )
// }



import React, { Component } from 'react'
import Auth from '../../modules/Auth'
export default class AddOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffee_id: '',
            size: '',
            quantity: '',
            order_id: '',
        }
    }
    handleInputChange = (e) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        this.setState({
            [name]: value
        })
    }

    handleOrderFormSubmit(e, data, props) {
        e.preventDefault();
        // console.log(data)
        console.log("props", props.coffeeInfo.id)
        fetch('/coffee_orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                coffee_orders: {
                    coffee_id: props.coffeeInfo.id,
                    size: this.state.size,
                    quantity: this.state.quantity,
                    order_id: this.state.order_id
                }
            }),
        }).then(res => res.json())
            .then((res) => {
                console.log(res)
            })
    }


    render() {
        // { console.log("coffee info", this.props.coffeeInfo) }
        // { console.log("state info", this.state) }
        return (
            < form onSubmit={(e) => this.handleOrderFormSubmit(e, this.state, this.props)} >

                {/* <input
                    type="number"
                    name="coffee_id"
                    placeholder="put the coffee ID"
                    value={this.state.coffee_id}
                    onChange={this.handleInputChange} /> */}
                <input
                    type="number"
                    name="size"
                    placeholder="put the size"
                    value={this.state.size}
                    onChange={this.handleInputChange} />
                <input
                    type="number"
                    name="quantity"
                    placeholder="put the quantity"
                    value={this.state.quantity}
                    onChange={this.handleInputChange} />
                <input
                    type="number"
                    name="order_id"
                    placeholder="put the order_id"
                    value={this.state.order_id}
                    onChange={this.handleInputChange} />
                <input type="submit" value="Add to the Order" />
            </ form >
        )
    }
}
