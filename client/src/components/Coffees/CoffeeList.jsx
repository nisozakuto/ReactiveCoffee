import React, { Component } from 'react'
import Auth from '../../modules/Auth'

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
            <div className="coffeeList">
                {
                    this.state.coffeeList ? (
                        this.state.coffeeList.coffees.map((coffee) => {
                            return (
                                <div className="coffees" key={coffee.name}>
                                    <img src={coffee.url} width="250px" alt={coffee.name} />
                                    <div className="coffee-info">
                                        <h2 onClick={() => { }}>{coffee.name}</h2>
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
