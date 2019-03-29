import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProductDetails,  } from '../actions/listActions'
import Details from '../components/details/Details'
import Spinner from '../components/loading/Spinner'

class DetailsContainer extends Component {
  componentWillMount(){
    if(this.props.match){
      this.props.getProductDetails(this.props.match.params.id)
    }
  }

  render() {
    return (
      <div className="container">
        {
          this.props.productDetails.pictures ? 
          (<Details details={this.props.productDetails} />)
          :
          (<div>
            <Spinner />
          </div>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  productDetails: state.products.productDetails
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getProductDetails
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)