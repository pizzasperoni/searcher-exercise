import React, { Component } from 'react';
import SearchBarContainer from './containers/SearchBarContainer'
import ListContainer from './containers/ListContainer'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  
  render() {
    return (
        <Provider store={store}>
          <SearchBarContainer />
          <ListContainer />
        </Provider>
    );
  }
}

export default App;
