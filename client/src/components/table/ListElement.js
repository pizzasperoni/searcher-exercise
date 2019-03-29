import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import DetailsContainer from '../../containers/DetailsContainer'

const ListElement = (props) => {

  return (
    <BrowserRouter>
      <li className="list-item" onClick={props.showDetails}>
        <Link to={`/items/${props.id}`}>
          <img src={props.thumbnail} height="180" width="180" className="thumbnail"></img>
        </Link>
          <div className="description">
            <p className="price">$ {props.price} </p>
            <p className="title">{props.title}</p>
          </div>
      </li>
      <Route path="/items/:id" component={DetailsContainer} />
    </BrowserRouter>
  )
}

export default ListElement