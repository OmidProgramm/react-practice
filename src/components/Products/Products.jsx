import React from 'react'
import "./Products.css";
import { Product } from './Product'

const Products = ({products}) => {
  
  return (
        <div className="products">
          {
            products.map((product)=>{
          return <Product product={product} key={product.id}/>
        })
          }
        </div>
  )
}

export default Products