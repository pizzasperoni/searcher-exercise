import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import SingleInput from '../../components/form/SingleInput'

// actions
import { showDetails } from '../../actions/listActions'
import { fetchProducts, setProductName, clearState } from '../../actions/searchBarActions'
import PropTypes from 'prop-types'

class searchBar extends Component {

  handleSubmit =(e) =>{
    e.preventDefault()
    this.props.clearState()
    this.props.fetchProducts(this.props.productName)
    this.props.showDetails(true) //because the action sets to false
    this.props.history.push(`/items?search=${this.props.productName}`)
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

searchBar.propTypes = {
  setProductName: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  products: PropTypes.array,
  productName: PropTypes.string,
  isShowingDetails: PropTypes.bool
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(searchBar))