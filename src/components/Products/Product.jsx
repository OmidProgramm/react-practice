import React from 'react'
import  "./Products.css"

export const Product = ({product}) => {
    console.log(product)
  return (
    <div className='product'>
        <h4 className="title">{product.title}</h4>
        <p>{product.price}</p>
        <p>{product.description.substr(0,50)}</p>
        <div className='imageParent'><img src={product.image}/></div>
    </div>
  )
}
