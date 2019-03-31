import React from 'react'

const Categories = (props) => {
  return (
    <ul className="categories">
      {
        props.categories.map((category, index)=>{
          if(index === category.length){
            return <li key={index}><strong>{category}</strong></li>
          }
          return <li key={index}>{category} <span> > </span></li>
        })
      }
    </ul>
  )
}

export default Categories