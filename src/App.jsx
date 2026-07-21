import React, { useEffect, useReducer, useState } from 'react'
import './App.css';
import Title from './components/Title/Title';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';


function App() {
  const [counter1,setCounter1] = useState(0)
  const [counter2,setCounter2] = useState(0)
  const changeCounter1 = ()=>{
    setCounter1(counter1 + 1)
    console.log("HI counter 1")
  }
  const changeCounter2 = ()=>{
    setCounter2(counter2 + 1)
    console.log("HI counter 2")
  }
  return (
    <>
      <h4>App</h4>
      <Title/>
      <div className="parentbtn">
         <Counter text={'1'} counter={counter1}/>
        <Button text={'1'} changeCounter={changeCounter1}/>
        <Counter text={'2'} counter={counter2}/>
        <Button text={'2'} changeCounter={changeCounter2}/>
       </div>
      
     </>
  )
}

export default App
