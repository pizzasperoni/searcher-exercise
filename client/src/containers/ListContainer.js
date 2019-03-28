import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// components
import ListElementContainer from './ListElementContainer'
import Details from '../components/details/Details'
// actions
import { fetchProducts } from '../actions/searchBarActions'
import { showDetails } from '../actions/listActions'


class ListContainer extends Component {
  componentWillMount(){
    this.props.fetchProducts("celulares")
  }

  handleDetails = () => {
    this.props.showDetails(this.props.isShowingDetails)
  }

  _renderSubComp(){
    // if(this.props.productDetails){

    //    return (
    //     <Details 
    //       // thumbnail={this.props.productDetails.pictures[0].url}
    //       title={this.props.productDetails.title}
    //       price={this.props.productDetails.price}
    //     />
    //   ) 
    // }
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
        {this._renderSubComp()}       
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
  productName: state.products.productName,
  isShowingDetails: state.products.isShowingDetails,
  productDetails: state.products.productDetails,
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)