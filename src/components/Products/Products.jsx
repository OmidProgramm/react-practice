import React from 'react'
import { Product } from './Product'

const Products = ({products}) => {
  
  return (
        products.map((product)=>{
          return <Product product={product} key={product.id}/>
        })
  )
}

export default Products