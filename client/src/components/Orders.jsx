import React, { Component } from 'react'
import OrderList from './OrderList.jsx/OrderList'

export default class Orders extends Component {
    render() {
        return (
            <main>
                <OrderList />
                <h2>Place an order</h2>
            </main>
        )
    }
}
