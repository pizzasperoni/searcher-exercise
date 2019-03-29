import React from 'react'

const Details = (props) => {
  const productDetails = props.details
  return (
    <div className="details">
      <section className="details-body">
        <img src={productDetails.pictures[0].url} height="680" width="680"></img>
        <div className="purchase">
          <h4>{productDetails.condition} - {productDetails.sold_quantity} vendidos</h4>
          <h3>{productDetails.title}</h3>
          <h1>$ {productDetails.price}</h1>
          <button className="btn">Comprar</button>
        </div>
      </section>
      <section className="details-footer">
        <h3 className="title">Descripcion del producto</h3>
        <p>{productDetails.description}</p>
      </section>
    </div>
  )
}

export default Details
