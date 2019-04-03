// setup
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// components
import App from './App'
import DetailsContainer from './containers/Details/DetailsContainer'
import Error from './components/Error'


class Main extends Component {
  render(){
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/items" component={App} exact/>
            <Route path='/items/:id/' component={DetailsContainer} />
            <Route component={Error} />
          </Switch>
        </Provider>
    </BrowserRouter>

    )
  }
}

export default Main