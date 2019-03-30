import React from 'react'
const Details = (props) => {
  const productDetails = props.details
  console.log('productDetails', productDetails)
  return (
    <div className="details">
      <section className="details-body">
        <img src={productDetails.pictures[0].url} height="680" width="680"></img>
        <div className="purchase">
          <h4>{productDetails.condition} - {productDetails.sold_quantity} vendidos</h4>
          <h3>{productDetails.title}</h3>
          <div className="price">
            <h1>${productDetails.price.currency} {productDetails.price.amount}</h1>
            <span>{productDetails.price.decimals}</span>
          </div>
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
