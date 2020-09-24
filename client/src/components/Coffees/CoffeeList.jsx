import React, { Component } from 'react'
import Auth from '../../modules/Auth'
import Coffee from './Coffee'
export default class CoffeeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            coffeeList: null
        }
    }

    componentDidMount() {
        this.getCoffeeList()
    }

    getCoffeeList() {
        fetch('/coffees', {
            headers: {
                token: Auth.getToken(),
                'Authorization': `Token ${Auth.getToken()}`
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    coffeeList: res
                })
            })
    }
    render() {
        return (
            < div className="coffeeList" >
                {/* {
                    this.state.coffeeList ? (
                        this.state.coffeeList.coffees.map((coffee) => {
                            return (
                                <Coffee key={coffee.id} coffeeName={coffee.name} coffeeFlavor={coffee.flavor} coffeeCategory={coffee.category} coffeeImageLarge={coffee.large_url} handleSelectedCoffee={this.handleSelectedCoffee} id={coffee.id} />

                            )
                        }))
                        : (
                            <p>Loading...</p>
                        )
                } */}

                {
                    this.state.coffeeList ? (
                        this.state.coffeeList.coffees.map((coffee) => {
                            return (
                                <div className="coffees" key={coffee.name}>
                                    <img src={coffee.short_url} width="250px" />
                                    <div className="coffee-info">
                                        <h2 onClick={() => { this.props.handleSelectedCoffee(coffee.id) }}>{coffee.name}</h2>
                                        <p>{coffee.flavor}</p>
                                        <p>{coffee.category}</p>
                                    </div>
                                </div>
                            )
                        }))
                        : (
                            <p>Loading...</p>
                        )}
            </div >
        )
    }
}
