import { useEffect, useState } from 'react'
import Products from './components/Products/Products';

import './App.css'
import Navbars from './components/Navbar/Navbars';
import Sliders from './components/Sliders/Sliders';

function App() {
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState([]);
  const [slider, setSlider] = useState([]);
  const getProducts = async ()=>{
    try {
    let data = await fetch("http://localhost:3006/products")
    let res = await data.json()
    setProducts(res)
    } catch (error) {
      console.log(error)
    }
  }
  const getMenu = async ()=>{
    try {
    let data = await fetch("http://localhost:3006/menu")
    let res = await data.json()
    setMenu(res)
    } catch (error) {
      console.log(error)
    }
  }
  const getSlider = async ()=>{
    try {
    let data = await fetch("http://localhost:3006/slider")
    let res = await data.json()
    setSlider(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getMenu()
    getProducts()
    getSlider()
  },[])
  
  return (
    <>
    <Navbars menu={menu}/>
      <Products products={products}/>
      <Sliders slider={slider}/>
    </>
  )
}

export default App
