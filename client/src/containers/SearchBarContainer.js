import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SingleInput from '../components/form/SingleInput'

// actions
import { fetchProducts, setProductName } from '../actions/searchBarActions'

class searchBar extends Component {

  handleSubmit =(e) =>{
    e.preventDefault()
    this.props.fetchProducts(this.props.productName)
    console.log('product entered', this.props.productName)
  }

  handleInput = e => {
    let productName = e.target.value
    this.props.setProductName(productName)
  }

  render() {
    return (
      <div>
        <SingleInput
          handleSubmit={this.handleSubmit} 
          controlFunc={this.handleInput} 
          content={this.props.productName}
        />
      </div>
    )
  }
}


// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setProductName,
    fetchProducts
  }, dispatch)
}

// mapStateToProps
const mapStateToProps = state => ({
  products: state.products.products,
  productName: state.products.productName
})

export default connect(mapStateToProps, mapDispatchToProps)(searchBar)