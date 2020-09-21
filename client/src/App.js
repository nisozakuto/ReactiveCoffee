import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { Route, Redirect } from 'react-router-dom';


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
        </div>
      </div>
    )
  }
}
