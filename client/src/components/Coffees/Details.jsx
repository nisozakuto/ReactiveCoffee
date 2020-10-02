import React, { Component } from 'react'
import Auth from '../../modules/Auth'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffeeName: this.props.selectedCoffee.name,
            coffeeShort_url: this.props.selectedCoffee.short_url,
            id: this.props.selectedCoffee.id,
            coffeeFlavor: this.props.selectedCoffee.flavor,
            coffeeCategory: this.props.selectedCoffee.category,
            size: 8,
            quantity: 1,
            order_id: '',

        }
        this.handleInputChange = this.handleInputChange.bind(this)

    }
    componentDidMount() {
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

    render() {
        return (
            <main className="details-main">
                <aside className="details-main-aside">
                    Java caramelization, a aftertaste crema in cup crema, shop so, grinder, saucer strong, id cup spoon foam seasonal single shot. A grounds in strong, arabica beans eu, mocha extra, flavour seasonal spoon, barista, kopi-luwak saucer fair trade at robust. Sit at as, caffeine roast, qui, roast, black mug, americano, doppio carajillo mocha, extraction robusta cortado whipped filter. Single shot chicory, single origin a macchiato con panna, whipped cappuccino roast at americano, bar cream latte crema shop, flavour, ut instant pumpkin spice con panna robust espresso decaffeinated. Brewed iced half and half acerbic steamed, sweet half and half, latte seasonal decaffeinated instant extraction beans roast dripper, sweet fair trade caffeine, americano siphon caffeine eu kopi-luwak sweet. Skinny, instant, mazagran french press aftertaste extra sugar extraction decaffeinated single shot spoon kopi-luwak milk body, single origin seasonal, java ristretto doppio carajillo iced. Strong, dark, medium percolator arabica, lungo skinny, robusta, single shot lungo cup black arabica.
                </aside>

                <section className="details-main-section">
                    <div className="coffees" key={this.state.coffeeName}>
                        <img src={this.state.coffeeShort_url} width="250px" alt={this.state.coffeeName} />
                        <div className="coffee-info">
                            <h2>{this.state.coffeeName}</h2>
                            <p>{this.state.coffeeFlavor}</p>
                        </div>
                    </div>
                    <form className="details-main-form" onSubmit={(e) => this.props.handleOrderFormSubmit(e, this.state.id, this.state.size, this.state.quantity, this.state.order_id)} >
                        <label>
                            Size (oz):
                            < input
                                type="number"
                                name="size"
                                placeholder="8 Oz"
                                min="1" max="20"
                                value={this.state.size}
                                onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Quantity:
                        <input
                                type="number"
                                name="quantity"
                                placeholder="1"
                                min="1" max="10"
                                value={this.state.quantity}
                                onChange={this.handleInputChange} />
                        </label>
                        <input type="submit" id="add-to-cart" value="Add to Order" />
                    </ form >
                    <div>
                    </div>
                </section>
            </main >
        )
    }
}
