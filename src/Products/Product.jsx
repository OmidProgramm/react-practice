import React from 'react'

export const Product = ({product}) => {
  return (
    <div>
      <h3>Title: {product.title}</h3>
      <h3>Category: {product.category}</h3>
      <div style={{width:"60%"}}><img src={product.image} alt="" style={{width:"30%"}}/></div>
      <p>Category: {product.description}</p>
    </div>
  )
}
