import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import shipping from '../../../public/assets/ic_shipping.png'
import DetailsContainer from '../../containers/DetailsContainer'

const ListElement = (props) => {
  console.log(props.shipping)
  return (
    <BrowserRouter>
      <li className="list-item" onClick={props.showDetails}>
        <Link to={`/items/${props.id}`}>
          <img src={props.thumbnail} height="180" width="180" className="thumbnail"></img>
        </Link>
          <div className="description">
            <div className="info-shippment">
              <div className="price">
                <h2>${props.currency} {props.amount}</h2>
                <span>{props.decimals}</span>
                {
                  props.shipping ?
                    <img src={shipping} height="18" width="18"></img>
                  :
                    <div></div>
                }
              </div>
              <div className="state">
                <p>{props.state}</p>
              </div>
            </div>
            
            <p className="title">{props.title}</p>
          </div>
      </li>
      <Route path="/items/:id" component={DetailsContainer} />
    </BrowserRouter>
  )
}

export default ListElement