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
            <div className="coffees" key={this.props.coffeeName}>
                <img src={this.props.coffeeImageLarge} width="150px" alt={this.props.id} onClick={(() => this.props.handleSelectedCoffee(this.props.id))} alt={this.props.coffeeName} />
                <h3 className="coffee-info">{this.props.coffeeName}</h3>
            </div>
        )
    }
}