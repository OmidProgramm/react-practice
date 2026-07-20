import React, { useContext } from 'react'
import { MyContext } from '../../App'
import { Product } from './Product'


const Products = () => {
    const {products} = useContext(MyContext) 
  return (
    <>
        <h5>Products</h5>
        <div className="products">
            {
            products && products.map(product=>{
               return <Product key={product.id} product={product}/>
            })
        }
        </div>
    </>
  )
}

export default Products