import React, { Component } from 'react'
import AddOrder from '../OrderList.jsx/AddOrder'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffeeName: '',
            coffeeShort_url: '',
            id: '',
            coffeeFlavor: '',
            coffeeCategory: '',
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
    }
    handleOrderSubmit = (evt, data) => {
        evt.preventDefault();
        // console.log("Order Button Clicked", data.id)
        // fetch('/coffee_orders', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({

        //     }),
        // }).then(res => res.json())
        //     .then((res) => {
        //         console.log(res)
        //     })
        //POST request or check the order
    }

    render() {
        return (
            <div>
                <>

                    {/* { console.log("coffee-list", this.props.selectedCoffee)} */}
                    {/* {console.log("PROPS", this.props.selectedCoffee)}
                    {console.log("state", this.state)}  */}
                    {/* <Coffee {...this.props} /> */}
                    <div className="coffees" key={this.state.coffeeName}>
                        <img src={this.state.coffeeShort_url} width="250px" alt={this.state.coffeeName} />
                        <div className="coffee-info">
                            <h2 onClick={() => { this.props.handleSelectedCoffee(this.state.id) }}>{this.state.coffeeName}</h2>
                            <p>{this.state.coffeeFlavor}</p>
                            <p>{}</p>
                        </div>
                    </div>
                    {console.log("coffee-props:", this.state.id)}
                    <div>
                        <h3>Your Order Info</h3>
                        <ul>coffeeName:{this.props.selectedCoffee.name} </ul>
                        <ul>coffeeShort_url:{this.props.selectedCoffee.short_url} </ul>
                        <ul>id:{this.props.selectedCoffee.id} </ul>
                        <ul>coffeeFlavor:{this.props.selectedCoffee.flavor} </ul>
                        <ul>coffeeCategory:{this.props.selectedCoffee.category} </ul>
                    </div>
                    <div>
                        <form onSubmit={(evt) => this.handleOrderSubmit(evt, this.state)} >
                            <input type="submit" id="add-to-cart" value="Add to Order" />
                        </form>
                    </div>

                    <AddOrder />

                </>
            </div >
        )
    }
}
