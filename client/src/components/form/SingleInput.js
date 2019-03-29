import React from 'react'
import logo from '../../../public/assets/Logo_ML.png'
import icSearch from '../../../public/assets/ic_Search.png'
import { Link } from 'react-router-dom'

const SingleInput = (props) => {
  return (
    <div className="search-bar">
      <img src={logo} height="32" width="44" className="logo"></img>
      <form className="form-control" onSubmit={props.handleSubmit}>
        <input 
          onChange={props.controlFunc}
          type="text" 
          placeholder="Nunca dejes de buscar" 
          value={props.content}
        >
        </input>
        <button type="submit" onClick={props.handleSubmit}>
          <Link to={`/items?search=${props.content}`}>
            <img src={icSearch} height="12" width="12"></img>
          </Link>
        </button>
      </form>
      
    </div>
  )
}

export default SingleInput