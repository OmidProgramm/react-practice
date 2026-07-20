import React, { useEffect, useState } from 'react'
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';

export let MyContext = React.createContext()

function App() {
  const [products, setProducts] = useState([])

  const getProducts = async ()=>{
    let data = await fetch("https://fakestoreapi.com/products")
    let res = await data.json()
    setProducts(res)
  }
  useEffect(()=>{
    getProducts()
  },[])
   
  return (
    <MyContext.Provider value={{products}}>
      <h4>App</h4>
      <Wrapper/>
    </MyContext.Provider>
  )
}

export default App
