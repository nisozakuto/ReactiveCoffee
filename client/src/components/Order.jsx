import React, { Component } from 'react'

export default class Order extends Component {
    render() {
        return (
            <div>
                <h1>Orders Page</h1>
                {
                    this.props.selectedCoffee ?
                        <>

                            <p>{this.props.selectedCoffee.id}</p>
                            <p>{this.props.selectedCoffee.name}</p>
                            <p>{this.props.selectedCoffee.category}</p>
                            <p>{this.props.selectedCoffee.flavor}</p>
                            <img src={this.props.selectedCoffee.short_url} />

                            <h1>Ny</h1>
                        </>
                        :
                        <>Something went wrong, go back.</>
                }
            </div>
        )
    }
}
