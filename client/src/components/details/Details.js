import React from 'react'

const Details = (props) => {
  console.log('details rendered!', props)
  return (
    <div>
      {/* <img src={props.thumbnail}></img> */}
      <h2>{props.title}</h2>
      <h1>$ {props.price}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Details