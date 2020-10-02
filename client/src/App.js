import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/partials/Header'
import Home from './components/partials/Home'
import Footer from './components/partials/Footer'
import LoginForm from './components/Users/LoginForm'
import Auth from './modules/Auth'
import Profile from './components/Users/Profile'
import CoffeeList from './components/Coffees/CoffeeList'
import Details from './components/Coffees/Details';
import SignupForm from './components/Users/SignUpForm'
import About from './components/About'
import Order from './components/Order'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
      selectedCoffee: null,
      selectedOrder: null,
      currentPage: null,
      fireRedirect: false,
      redirectPath: null,
      cart: '',
      activeOrder: null,
      isCurrentActiveOrderFulfilled: null,
      userId: null,
      loginUserName: null,
      loginUserPassword: null,
      profileData: null,
      ordersData: null,
      coffeeOrdersData: null,
      coffeeDetail: null,
    }
    this.handleOrderFormSubmit = this.handleOrderFormSubmit.bind(this)
  }

  componentDidMount() {
    this.getProfileInfo()
    this.ordersData()
  }

  browse = (e, location) => {
    this.setState({
      fireRedirect: true,
      redirectPath: `/${location}`
    })
  }

  getProfileInfo = () => {
    fetch('/profile', {
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          profileData: res,
        })
        if (res.active_order != null) {
          this.setState({
            activeOrder: res.active_order.id,
            isCurrentActiveOrderFulfilled: res.active_order.isFulFilled,
          })
        }
        if (res.user) {
          this.setState({
            userId: res.user.id,
          })
        }
      })
  }

  ordersData() {
    fetch('/orders', {
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          ordersData: res
        })
      })
  }

  getCoffeeOrdersDetails = (e, order_id) => {
    console.log('profile', order_id)
    fetch(`/coffee_orders/${order_id}`, {
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then((res) => {
        this.setState({
          coffeeOrdersData: res
        })
      })
  }

  // getCoffeeDetails = (coffee_id) => {
  //   console.log('coffee id', coffee_id)
  //   fetch(`/coffees/${coffee_id}`, {
  //     headers: {
  //       token: Auth.getToken(),
  //       'Authorization': `Token ${Auth.getToken()}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then((res) => {
  //       this.setState({
  //         coffeeDetail: res
  //       })
  //     })
  // }

  handleSelectedCoffee = (id) => {
    fetch(`/coffees/${id}`, {
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          selectedCoffee: res.coffee,
          fireRedirect: true,
          redirectPath: `/coffees/${id}`
        })
      })
  }

  handleLoginSubmit = (evt, values) => {
    evt.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => res.json())
      .then(res => {
        Auth.authenticateUser(res.token)
        this.setState({
          fireRedirect: true,
          redirectPath: '/profile',
          auth: Auth.isUserAuthenticated(),
        })
      })
  }

  logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated(),
        loginUserName: '',
        loginUserPassword: ''
      })
    })
  }

  handleSignupSubmit = (e, values) => {
    e.preventDefault()
    fetch('/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: values })
      }).then(res => res.json())
      .then(res => {
        if (res.token)
          Auth.authenticateUser(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated()
        })
      })
  }

  handleOrderCloseSubmit = (evt) => {
    evt.preventDefault();
    fetch(`/orders/${this.state.order_id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          token: Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()} `,
        },
        body: JSON.stringify({
          isFulFilled: true
        })
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  createANewOrder = () => {
    fetch('/orders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()}`
        },
        body: JSON.stringify({
          'user_id': this.state.userId,
        })
      })
      .then(res => res.json())
      .then(e => {
        this.setState({
          fireRedirect: true,
          redirectPath: '/coffees'
        })
      })
  }

  handleOrderFormSubmit(e, id, size, quantity, order_id) {
    e.preventDefault()
    fetch('/coffee_orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        coffee_orders: {
          coffee_id: id,
          size: size,
          quantity: quantity,
          order_id: order_id
        }
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        fetch(`/orders/${order_id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              token: Auth.getToken(),
              'Authorization': `Token ${Auth.getToken()} `,
            },
            body: JSON.stringify({
              isFulFilled: true
            })
          })
          .then(res => res.json())
          .then(res => {
            this.createANewOrder()
          })
          .then(
            this.setState({
              fireRedirect: true,
              redirectPath: '/profile'
            }))
          .catch(err => console.log(err))
      })
  }

  deleteOrder = (order_id) => {
    this.setState({
      fireRedirect: false,
    })
    console.log("delete user")
    fetch(`/orders/${order_id}`, {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => {
      console.log("here")
      this.setState({
        fireRedirect: true,
        redirectPath: '/profile',
      })
    })
  }

  viewOrder(order_id) {
    console.log(order_id)
    this.setState({
      fireRedirect: true,
      redirectPath: `/orders/${order_id}`
    })
  }

  editOrder = (e, order_id) => {
    console.log(e)
    console.log("edit order", order_id)
    this.setState({
      fireRedirect: true,
      redirectPath: `/orders/${order_id}`,
      selectedOrder: order_id
    })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        < div className="container" >
          <Route exact path='/' render={() => (<Home browse={this.browse} />)} />
          <Route exact path="/login" render={() => <LoginForm handleLoginSubmit={this.handleLoginSubmit} />} />
          <Route exact path="/signup" render={() => <SignupForm handleSignupSubmit={this.handleSignupSubmit} />} />
          <Route exact path="/profile" render={() => (
            <Profile
              active_coffee_order={this.active_coffee_order}
              createANewOrder={this.createANewOrder}
              logoutUser={this.logoutUser}
              state={this.state}
              deleteOrder={this.deleteOrder}
              editOrder={this.editOrder}
              viewOrder={this.viewOrder}
              deleteOrder={this.deleteOrder}
              profileData={this.state.profileData}
              getCoffeeOrdersDetails={this.getCoffeeOrdersDetails}

            />)} />
          <Route exact path='/coffees' render={() => (<CoffeeList handleSelectedCoffee={this.handleSelectedCoffee} />)} />
          <Route exact path='/coffees/:id' render={() => (<Details selectedCoffee={this.state.selectedCoffee} handleOrderFormSubmit={this.handleOrderFormSubmit} handleOrderCloseSubmit={this.handleOrderCloseSubmit} />)} />
          <Route exact path='/about' render={() => (<About />)} />
          <Route exact path='/orders/:id' render={() => (<Order
            selectedCoffee={this.state.selectedCoffee}
            editOrder={this.editOrder}
            selectedOrder={this.state.selectedOrder}
          />)} />
          {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
        </div >
        <Footer />
      </div >
    )
  }
}
