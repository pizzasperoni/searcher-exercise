import React, { Component } from 'react'
import ListElement from '../components/table/ListElement'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getProductDetails,  } from '../actions/listActions'
class ListElementContainer extends Component {

  showDetails = (e, product) =>{
    this.props.getProductDetails(product.id)
  }

  render() {
    return (
      <div onClick={this.props.handleDetails}>
        {
          this.props.items.map((item)=>{
          return (
            <ListElement 
              showDetails={((e)=>this.showDetails(e, item))}
              shipping={item.shipping.free_shipping}
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              price={item.price}
              title={item.title}
              state={item.address.state_name}
            />
          )
        })
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getProductDetails
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ListElementContainer)
