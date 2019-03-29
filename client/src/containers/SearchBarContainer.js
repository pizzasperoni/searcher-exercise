import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SingleInput from '../components/form/SingleInput'

// actions
import { showDetails } from '../actions/listActions'
import { fetchProducts, setProductName, clearState } from '../actions/searchBarActions'

class searchBar extends Component {

  handleSubmit =(e) =>{
    e.preventDefault()
    this.props.clearState()
    this.props.fetchProducts(this.props.productName)
    this.props.showDetails(true)
  }

  handleInput = e => {
    let productName = e.target.value
    this.props.setProductName(productName)
  }

  render() {
    return (
      <SingleInput
        handleSubmit={this.handleSubmit} 
        controlFunc={this.handleInput} 
        content={this.props.productName}
      />
    )
  }
}


// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setProductName,
    fetchProducts,
    showDetails,
    clearState
  }, dispatch)
}

// mapStateToProps
const mapStateToProps = state => ({
  products: state.products.products,
  productName: state.products.productName,
  isShowingDetails: state.products.isShowingDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(searchBar)