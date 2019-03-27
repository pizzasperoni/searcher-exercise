import React, { Component } from 'react'
import App from './App'
import Details from './components/details/Details'
import Error from './components/Error'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'

class Main extends Component {
  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact/>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>

    )
  }
}

export default Main