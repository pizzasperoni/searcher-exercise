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
    console.log('isShowingDetails', this.props.isShowingDetails)
    
    if(this.props.isShowingDetails){
      console.log('description on')
      return <Details  />
    }
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
  productName: state.productName,
  isShowingDetails: state.isShowingDetails,
  productDetails: state.productDetails,
  porductDescription: state.porductDescription
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)