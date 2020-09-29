// import React, { Component } from 'react'
// import Auth from '../../modules/Auth'
// export default class AddOrder extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             coffee_id: '',
//             size: '',
//             quantity: '',
//             order_id: '',
//         }
//     }

//     componentDidMount() {
//         this.getActiveOrder()
//         console.log("coffeeINdo", this.props)
//     }

//     handleInputChange = (e) => {
//         const name = e.currentTarget.name
//         const value = e.currentTarget.value
//         this.setState({
//             [name]: value
//         })
//     }

//     getActiveOrder() {
//         fetch('/profile', {
//             headers: {
//                 token: Auth.getToken(),
//                 'Authorization': `Token ${Auth.getToken()}`
//             }
//         })
//             .then(res => res.json())
//             .then(res => {
//                 {
//                     if (res.active_order)
//                         (
//                             this.setState({
//                                 order_id: res.active_order.id
//                             })
//                         )
//                     // console.log("order_id", this.state.order_id)
//                 }
//             })
//     }

//     handleOrderFormSubmit(e, data, props) {
//         e.preventDefault();

//         fetch('/coffee_orders', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 coffee_orders: {
//                     coffee_id: props.coffeeInfo.id,
//                     size: data.size,
//                     quantity: data.quantity,
//                     order_id: this.state.order_id
//                 }
//             })
//         })
//             .then(res => res.json())
//             .then(res => console.log("res from post", res))
//     }

//     // .then(res => res.json())
//     //         .then(() => {
//     //             fetch(`/orders/${this.state.order_id}`,
//     //                 {
//     //                     method: 'PUT',
//     //                     headers: {
//     //                         'Content-Type': 'application/json',
//     //                         token: Auth.getToken(),
//     //                         'Authorization': `Token ${Auth.getToken()} `,
//     //                     },
//     //                     body: JSON.stringify({
//     //                         isFulFilled: true
//     //                     }),
//     //                 })
//     //         })

//     render() {
//         return (
//             <form onSubmit={(e) => this.handleOrderFormSubmit(e, this.state, this.props)} >
//                 < input
//                     type="number"
//                     name="size"
//                     placeholder="put the size"
//                     value={this.state.size}
//                     onChange={this.handleInputChange} />
//                 <input
//                     type="number"
//                     name="quantity"
//                     placeholder="put the quantity"
//                     value={this.state.quantity}
//                     onChange={this.handleInputChange} />
//                 < input type="submit" value="Add to the Order" />
//             </ form >
//         )
//     }
// }
