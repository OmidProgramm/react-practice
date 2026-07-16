import { useEffect, useState } from 'react'

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
  console.log(products)
  return (
    <>
      <h4>Hello Fetch</h4>
    </>
  )
}

export default App
