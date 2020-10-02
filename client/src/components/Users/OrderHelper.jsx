import React, { Component } from 'react'

export default class OrderHelper extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div div className="single-order-box">
                    <div className="single-order-box-info">
                        <li key={this.props.order.id} onClick={() => this.props.getCoffeeOrdersDetails(this.props.order.id)}>Order ID: {this.props.order.id}</li>
                        <form className="order-forms" onSubmit={(evt => this.props.editOrder(evt))}>
                            <input type="submit" value="Edit Order" />
                        </form>
                        <form className="order-forms" onSubmit={(e) => this.props.getCoffeeOrdersDetails(e, this.props.order.id)}>
                            <input type="submit" value="View Order" />
                        </form>
                    </div>
                    <div>
                        <form className="delete-button" onSubmit={(() => this.props.deleteOrder(this.props.order.id))}>
                            <input type="submit" value="Delete Order" />
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
