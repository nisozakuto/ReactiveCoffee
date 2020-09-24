import React, { useState } from 'react'
import Auth from '../../modules/Auth'

const AddOrder = () => {
    const [coffee_id, setcoffeeId] = useState('')
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState('')
    const [order_id, setOrder_id] = useState('')

    const handleOrderFormSubmit = (evt) => {
        evt.preventDefault();
        fetch('/coffee_orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                coffee_orders: {
                    coffee_id, size, quantity, order_id
                }
            }),
        }).then(res => res.json())
            .then((res) => {
                console.log(res)
            })
    }


    return (
        <form onSubmit={handleOrderFormSubmit}>
            <input
                type="number"
                name="coffee_id"
                placeholder="put the coffee ID"
                value={coffee_id}
                onChange={(evt) => setcoffeeId(evt.target.value)} />
            <input
                type="number"
                name="size"
                placeholder="put the size"
                value={size}
                onChange={(evt) => setSize(evt.target.value)} />
            <input
                type="number"
                name="quantity"
                placeholder="put the quantity"
                value={quantity}
                onChange={(evt) => setQuantity(evt.target.value)} />
            <input
                type="number"
                name="order_id"
                placeholder="put the order_id"
                value={order_id}
                onChange={(evt) => setOrder_id(evt.target.value)} />
            <input type="submit" value="Add to the Order" />
        </form>
    )
}

export default AddOrder;