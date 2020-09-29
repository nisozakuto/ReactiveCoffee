import React, { Component } from 'react'
import AddOrder from '../OrderList.jsx/AddOrder'
import Auth from '../../modules/Auth'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffeeName: '',
            coffeeShort_url: '',
            id: '',
            coffeeFlavor: '',
            coffeeCategory: '',
            coffee_id: '',
            size: '',
            quantity: '',
            order_id: '',

        }
    }
    componentDidMount() {
        this.setState({
            coffeeName: this.props.selectedCoffee.name,
            coffeeShort_url: this.props.selectedCoffee.short_url,
            id: this.props.selectedCoffee.id,
            coffeeFlavor: this.props.selectedCoffee.flavor,
            coffeeCategory: this.props.selectedCoffee.category,
        })
        this.getActiveOrder()
    }

    handleInputChange = (e) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        this.setState({
            [name]: value
        })
    }

    getActiveOrder() {
        fetch('/profile', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
            .then(res => res.json())
            .then(res => {
                {
                    if (res.active_order)
                        (
                            this.setState({
                                order_id: res.active_order.id
                            })
                        )
                }
            })
    }

    handleOrderFormSubmit(e, data, props) {
        e.preventDefault();

        fetch('/coffee_orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                coffee_orders: {
                    coffee_id: this.state.id,
                    size: data.size,
                    quantity: data.quantity,
                    order_id: this.state.order_id
                }
            })
        })
            .then(res => res.json())
            .then(res => console.log("res from post", res))
    }

    render() {
        return (
            <main className="details-main">
                <aside>
                    lorem info
                </aside>
                <section>
                    <div className="coffees" key={this.state.coffeeName}>
                        <img src={this.state.coffeeShort_url} width="250px" alt={this.state.coffeeName} />
                        <div className="coffee-info">
                            <h2 onClick={() => { this.props.handleSelectedCoffee(this.state.id) }}>{this.state.coffeeName}</h2>
                            <p>{this.state.coffeeFlavor}</p>
                        </div>
                    </div>
                    {/* <AddOrder coffeeInfo={this.state} /> */}
                    <form onSubmit={(e) => this.handleOrderFormSubmit(e, this.state, this.props)} >
                        < input
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
                        < input type="submit" value="Add to the Order" />
                    </ form >
                    <div>
                        <form onSubmit={(evt) => this.props.handleOrderSubmit(evt)} >
                            <input type="submit" id="add-to-cart" value="Add to Order" />
                        </form>
                    </div>
                </section>
            </main >
        )
    }
}
