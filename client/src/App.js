import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/partials/Header'
import Home from './components/partials/Home'
import Orders from './components/Orders'
import Footer from './components/partials/Footer'
import LoginForm from './components/Users/LoginForm'
import Auth from './modules/Auth'
import Profile from './components/Users/Profile'
import CoffeeList from './components/Coffees/CoffeeList'
import Details from './components/Coffees/Details';
import SignupForm from './components/Users/SignUpForm'
import ls from 'local-storage'
import About from './components/About'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
      selectedCoffee: null,
      currentPage: null,
      fireRedirect: false,
      redirectPath: null,
      cart: '',
      activeOrder: null,
      isCurrentActiveOrderFulfilled: null,
      userId: null,

    }
  }

  componentDidMount() {
    this.getProfileInfo()
  }

  getProfileInfo = (e) => {
    fetch('/profile', {
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("getProfile Info", res)
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
        console.log("user info gotten.", this.state.userId)
      })
  }

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
        const coffeeCategory = []
        ls.set('coffeeCategory', this.state.selectedCoffee.category)
        ls.set('coffeeFlavor', this.state.selectedCoffee.flavor)
        ls.set('coffeeId', this.state.selectedCoffee.id)
        ls.set('coffeeLargeUrl', this.state.selectedCoffee.large_url)
        ls.set('coffeeShortUrl', this.state.selectedCoffee.short_url)
        ls.set('coffeeName', this.state.selectedCoffee.name)

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
        console.log(res)
      })
  }

  handleOrderCloseSubmit = (evt) => {
    evt.preventDefault();
    // WHEN CLICKED TO ORDER COFFEE
    console.log("Clicked to big green", evt)
    console.log("this.state.order_id", this.state.order_id)
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
  }


  // active_coffee_order = (values) => {
  //   console.log("app js active coffee order")
  //   fetch('/profile', {
  //     headers: {
  //       token: Auth.getToken(),
  //       'Authorization': `Token ${Auth.getToken()}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log("RES", res)
  //       this.setState({
  //         usrid: res.user.id
  //       })
  //     })
  // }
  handleOrderFormSubmit(e, id, size, quantity, order_id) {
    e.preventDefault();
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
      .then(res => console.log("res from post", res))
  }

  render() {
    return (
      <div className="App" >
        <Header />
        { console.log("selected coffee at the app.js", this.state)
        }
        < div className="container" >
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path="/login" render={() => <LoginForm handleLoginSubmit={this.handleLoginSubmit} />} />
          <Route exact path="/signup" render={() => <SignupForm handleSignupSubmit={this.handleSignupSubmit} />} />
          {/* <Route exact path="/logout" /> */}
          < Route exact path="/profile" render={() => <Profile active_coffee_order={this.active_coffee_order} createANewOrder={this.createANewOrder} />} />
          < Route exact path='/orders' render={() => (<Orders />)} />
          < Route exact path='/coffees' render={() => (<CoffeeList handleSelectedCoffee={this.handleSelectedCoffee} />)} />
          < Route exact path='/coffees/:id' render={() => (<Details selectedCoffee={this.state.selectedCoffee} handleOrderFormSubmit={this.handleOrderFormSubmit} handleOrderCloseSubmit={this.handleOrderCloseSubmit} />)} />
          < Route exact path='/about' render={() => (<About />)} />
          {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
        </div >
        <Footer />
      </div >
    )
  }
}
