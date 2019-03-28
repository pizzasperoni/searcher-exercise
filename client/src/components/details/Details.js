import React from 'react'

const Details = (props) => {
  return (
    <div>
      {/* <img src={props.thumbnail}></img> */}
      <h2>{props.title}</h2>
      <h1>$ {props.price}</h1>
    </div>
  )
}

export default Details