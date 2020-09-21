import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Orders from './components/Orders'
import Footer from './components/Footer'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path='/'
            render={() => (
              <Home />
            )} />
          <Route exact path='/orders'
            render={() => (<Orders />)} />
          <Footer />
        </div>
      </div>
    )
  }
}
