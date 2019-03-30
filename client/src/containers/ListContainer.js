import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// components
import ListElementContainer from './ListElementContainer'
// actions
import { fetchProducts } from '../actions/searchBarActions'
import { showDetails } from '../actions/listActions'

class ListContainer extends Component {
  componentWillMount(){
    console.log(this.props.products)
    if(this.props.search.includes('search')){
      const params = new URLSearchParams(this.props.search)
      this.props.fetchProducts(params.get('search'))
    }
  }

  handleDetails = () => {
    this.props.showDetails(this.props.isShowingDetails)
  }

  render() {
    return (
      <div>
        <ul>
            <ListElementContainer
              handleDetails={this.handleDetails}
              items={this.props.products}
            />
        </ul> 
      </div>
    )  
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchProducts,
    showDetails
  }, dispatch)
}

// mapStateToProps
const mapStateToProps = state => ({
  products: state.products.products,
  isShowingDetails: state.products.isShowingDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)