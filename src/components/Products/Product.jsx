import React from 'react'

export const Product = ({product}) => {
    console.log(product)
  return (
    <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
        <h6>{product.title}</h6>
        <p>{product.price}</p>
        <p>{product.description.substr(0,50)}</p>
        <div><img src={product.image} style={{width:"50px"}} /></div>
    </div>
  )
}
