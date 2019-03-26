import React from 'react'

const ListElement = (props) => {
  return (
    <li className="list-item" onClick={props.showDetails}>
      <img src={props.thumbnail} height="180" width="180" className="thumbnail"></img>
        <div className="description">
          <p className="price">$ {props.price}</p>
          <p className="title">{props.title}</p>
        </div>
    </li>
  )
}

export default ListElement