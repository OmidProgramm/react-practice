import React from 'react'
import "./Products.css";
export const Product = ({product}) => {
  return (
    <div className='product'>
      <h4>Title: {product.title.substr(0,10)}</h4>
      <h4>Category: {product.category}</h4>
      <div className='imageParent'><img src={product.image} alt="" /></div>
      <p>{product.description.substr(0,50)}...</p>
      <p>{product.rating.rate}...</p>
      <p>{product.rating.count}</p>
    </div>
  )
}
