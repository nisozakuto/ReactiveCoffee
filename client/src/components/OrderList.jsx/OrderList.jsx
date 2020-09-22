import React, { Component } from 'react'
import AddOrder from './AddOrder'
export default class OrderList extends Component {
    render() {
        return (
            <div>
                <h1>This is the list of orders</h1>
                <AddOrder />
            </div>
        )
    }
}
