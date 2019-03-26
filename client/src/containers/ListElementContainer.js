import React, { Component } from 'react'
import ListElement from '../components/table/ListElement'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getProductDetails, getDescription } from '../actions/listActions'
import store from '../store'

class ListElementContainer extends Component {

  showDetails = (e, product) =>{
    //get details from store
    console.log('producto clickeado', product)
    this.props.getDescription(product)
    this.props.getProductDetails(product)
    
  }

  render() {
    return (
      <div onClick={this.props.handleDetails}>
        {this.props.items.map((item)=>{
          return (
            <ListElement 
              showDetails={((e)=>this.showDetails(e, item))}
              key={item.id}
              thumbnail={item.thumbnail}
              price={item.price}
              title={item.title}
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
    getDescription,
    getProductDetails
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ListElementContainer)
