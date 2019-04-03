import React, { Component } from 'react';
import { connect } from 'react-redux'

import SearchBarContainer from './containers/SearchBar/SearchBarContainer'
import ListContainer from './containers/List/ListContainer'
import DetailsContainer from './containers/Details/DetailsContainer'
class App extends Component {
 
  render() {
    let details = this.props.productDetails
    let isShowingDetails = this.props.isShowingDetails

    if(!isShowingDetails){
      return (
        <div>
          <SearchBarContainer />
          <ListContainer search={this.props.location.search} match={this.props.match}  />
        </div>
      )
    }else if(details !== {}){
      return(
        <div>
          <DetailsContainer details={details} />
        </div>
      )
    }
  }
}

// mapStateToProps
const mapStateToProps = state => ({
  isShowingDetails: state.products.isShowingDetails,
  productDetails: state.products.productDetails
})

export default connect(mapStateToProps, null)(App)