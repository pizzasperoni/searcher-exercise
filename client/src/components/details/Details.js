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
          <div className="price">
            <h1>${productDetails.price.currency} {productDetails.price.amount}</h1>
            <span>{productDetails.price.decimals}</span>
          </div>
          <button className="btn">Comprar</button>
        </div>
      </section>
      <section className="details-footer">
        <h3 className="title">Descripcion del producto</h3>
        <div>
          {
            productDetails.description.split("\n").map((i, key) => {
              return (<p key={key}>{i}</p>)
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Details
