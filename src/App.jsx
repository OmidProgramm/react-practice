import { useState } from 'react'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import './App.css'

function App() {
  const [type,setType] = useState("password")
  const [display,setDisplay] = useState(true)
  const changeType = ()=>{
    setType(type === "password" ? "text" : "password");
    setDisplay(!display);
  }
  return (
    <>
      <h1 className='projTitle'>Hello React</h1>
      <input type={type} placeholder='password'/>
      <FiEye style={{ display: display ? "inline" : "none" }}
      onClick={changeType}/>
      <FiEyeOff style={{ display: display ? "none" : "inline" }}
      onClick={changeType}/>
    </>
  )
}

export default App
