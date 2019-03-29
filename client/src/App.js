import React, { Component } from 'react';
import { connect } from 'react-redux'

import SearchBarContainer from './containers/SearchBarContainer'
import ListContainer from './containers/ListContainer'
import DetailsContainer from './containers/DetailsContainer'
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
          <SearchBarContainer />
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