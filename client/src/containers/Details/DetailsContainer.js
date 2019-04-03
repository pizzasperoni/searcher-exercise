import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProductDetails, showDetails  } from '../../actions/listActions'

import Categories from '../../components/table/Categories'
import SearchBarContainer from '../SearchBar/SearchBarContainer'
import Details from '../../components/details/Details'
import Spinner from '../../components/loading/Spinner'
import PropTypes from 'prop-types'

class DetailsContainer extends Component {
  componentWillMount(){
    if(this.props.match){
      this.props.getProductDetails(this.props.match.params.id)
      this.props.showDetails(false)
    }
  }

  render() {
    return (
      <div>
        <SearchBarContainer />
        <Categories categories={this.props.categories}/>
        <div className="container">
        { 
          this.props.productDetails.pictures && this.props.isShowingDetails ? 
          ( 
            <Details details={this.props.productDetails} />
          )
          :
          (<div>
            <Spinner />
          </div>)
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  productDetails: state.products.productDetails,
  isShowingDetails: state.products.isShowingDetails,
  categories: state.products.categories
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getProductDetails,
    showDetails
  }, dispatch)
}

DetailsContainer.propTypes = {
  getProductDetails: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
  productDetails: PropTypes.object.isRequired,
  isShowingDetails: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)