import  {useRef, useState } from 'react'
import './App.css';



function App() {
  let data = useRef()
  const clickMe = ()=>{
    console.log(data.current.textContent)
  }
  return (
    <>
    <button className='btn' onClick={clickMe}>click</button>
      <h3 ref={data}>Hello</h3>
    </>
  )
}

export default App
