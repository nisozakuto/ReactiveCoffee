import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Orders from './components/Orders'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import Auth from './modules/Auth'
import Profile from './components/Users/Profile'
import CoffeeList from './components/Coffees/CoffeeList'
import Coffee from './components/Coffees/Coffee'
import Details from './components/Coffees/Details';
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
      selectedCoffee: null,
      currentPage: null,
      fireRedirect: false,
      redirectPath: null,
    }
  }

  handleSelectedCoffee = (id) => {
    console.log(id)
    fetch(`/coffees/${id}`, {
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.coffee)
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

  render() {
    return (
      <div className="App">
        <Header />
        {console.log("selected coffee at the app.js", this.state.selectedCoffee)}
        <div className="container">
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path="/login" render={() => <LoginForm handleLoginSubmit={this.handleLoginSubmit} />} />
          {/* <Route exact path="/logout" /> */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path='/orders' render={() => (<Orders />)} />
          <Route exact path='/coffees' render={() => (<CoffeeList handleSelectedCoffee={this.handleSelectedCoffee} />)} />
          <Route exact path='/coffees/:id' render={() => (<Details selectedCoffee={this.state.selectedCoffee} />)} />
          {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
        </div>
        <Footer />
      </div >
    )
  }
}
