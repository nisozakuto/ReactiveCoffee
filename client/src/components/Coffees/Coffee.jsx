import React, { Component } from 'react'

export default class Coffee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: null,
        }
    }

    render() {
        return (
            <main>
                <div className="coffees" key={this.props.coffeeName}>
                    <img src={this.props.coffeeImageLarge} width="250px" alt={this.props.id} onClick={(() => this.props.handleSelectedCoffee(this.props.id))} />
                    <div className="coffee-info">
                        <h2 onClick={() => { console.log("clicked") }}>{this.props.coffeeName}</h2>
                        <p>{this.props.coffeeFlavor}</p>
                        <p>{this.props.coffeeCategory}</p>
                    </div>
                </div>
            </main>
        )
    }
}