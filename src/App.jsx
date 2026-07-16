import { useEffect, useState } from 'react'
import Products from './components/Products/Products';

import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const getData = ()=>{
    fetch("https://fakestoreapi.com/products")
    .then(data=>data.json())
    .then(res=>setProducts(res))
    .catch(err=>console.log(err))
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
