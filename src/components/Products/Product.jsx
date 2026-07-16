import React from 'react'

export const Product = ({product}) => {
  return (
    <div>
      <h4>Title: {product.title.substr(0,10)}</h4>
      <h4>Category: {product.category}</h4>
      <div style={{width:"60%"}}><img src={product.image} alt="" style={{width:"30%"}}/></div>
      <p>{product.description.substr(0,50)}...</p>
      <p>{product.rating.rate}...</p>
      <p>{product.rating.count}</p>
    </div>
  )
}
