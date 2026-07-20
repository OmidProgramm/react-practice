import React, { useEffect, useReducer, useState } from 'react'
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';

export let MyContext = React.createContext()
let initCount = 0;
const funcReducer = (state, action)=>{
  switch(action){
    case '+':
      return state + 1
    case '-':
      return state - 1
    case 'reset':
      return initCount
    default:
      return state
  }
}

function App() {
  
  const [counter, dispatch] = useReducer(funcReducer, initCount)

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
      <div>
        <h5>Count: {counter}</h5>
      </div>
      <div className='parentbtn'>
        <button className='btn' onClick={()=>dispatch('+')}>+</button>
        <button className='btn' onClick={()=>dispatch('-')}>-</button>
        <button className='btn' onClick={()=>dispatch('reset')}>reset</button>
      </div>
    </MyContext.Provider>
  )
}

export default App
