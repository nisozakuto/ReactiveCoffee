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

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
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
        <div className="container">
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path="/login" render={() => <LoginForm handleLoginSubmit={this.handleLoginSubmit} />} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path='/orders' render={() => (<Orders />)} />
          <Footer />
        </div>
      </div >
    )
  }
}
