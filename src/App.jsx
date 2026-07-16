import { useEffect, useState } from 'react'
import Products from './components/Products/Products';

import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const getData = async ()=>{
    let data = await fetch("https://fakestoreapi.com/products")
    let res = await data.json()
    setProducts(res)
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <>
      <h4>Hello Fetch</h4>
      <Products products={products}/>
    </>
  )
}

export default App
