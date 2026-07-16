import React from 'react'
import { Product } from './Product'

const Products = ({products}) => {
  
  return (
    <>
      {
        products.map((product,index)=>{
          return <Product product={product} key={product.id}/>
        })
      }
    </>
  )
}

export default Products