import React, { useEffect, useState } from 'react'

import './App.css';



function App() {
  const [products, setProducts] = useState(null)
  const getProducts = async ()=>{
  let data = await fetch("https://fakestoreapi.com/products")
  let res = await data.json()
  setProducts(res)
 
}
useEffect(()=>{
  getProducts()
},[])
   console.log(products)
  return (
    <>
    <h4>App</h4>
    
    <div>
      {
        products && products.map(product=>{
          return(
            <div key={product.id} >
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <h5>{product.category}</h5>
              <h5>{product.rating.count}</h5>
              <hr/>
            </div>
          )
        })
      }
    </div>

    </>
      
    
  )
}

export default App
