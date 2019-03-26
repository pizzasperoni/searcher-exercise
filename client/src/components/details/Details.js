import React from 'react'

const Details = (props) => {
  console.log('details rendered!', props)
  return (
    <div>
      <img src={props.data.thumbnail}></img>
      <h2>{props.data.title}</h2>
      <h1>$ {props.data.price}</h1>
    </div>
  )
}

export default Details