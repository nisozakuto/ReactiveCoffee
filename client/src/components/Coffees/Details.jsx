import React, { Component } from 'react'
import Coffee from './Coffee'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <>
                    { console.log("coffee-list", this.state)}
                    {console.log("PROPS", this.props.selectedCoffee)}
                    {console.log("state", this.state)}
                    {/* <Coffee {...this.props} /> */}
                    <div className="coffees" key={this.props.selectedCoffee.name}>
                        <img src={this.props.selectedCoffee.short_url} width="250px" />
                        <div className="coffee-info">
                            <h2 onClick={() => { this.props.handleSelectedCoffee(this.props.selectedCoffee.id) }}>{this.props.selectedCoffee.name}</h2>
                            <p>{this.props.selectedCoffee.flavor}</p>
                            <p>{this.props.selectedCoffee.category}</p>
                        </div>
                    </div>

                </>
            </div>
        )
    }
}
