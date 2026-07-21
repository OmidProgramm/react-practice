import  { useCallback, useMemo, useState } from 'react'
import './App.css';
import Title from './components/Title/Title';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';


function App() {
  const [counter1,setCounter1] = useState(0)
  const [counter2,setCounter2] = useState(0)

  const changeCounter1 = ()=>{
    setCounter1(counter1 + 1)
    
  }
  const changeCounter2 = ()=>{
    setCounter2(counter2 + 1)
  }
  const isEven = useMemo(()=>{
    let i =0
    while(i <30000000000){
      i++
    }
    return counter1 %2 === 0
  },[counter1])
  return (
    <>
      <h4>App</h4>
     
      <div className="parentbtn">
         <button className='btn' onClick={changeCounter1}>+</button>
         <span>{counter1} - {isEven?" even": " odd"} </span>
         <button className='btn' onClick={changeCounter2}>+</button>
         <span>{counter2}</span>
       </div>
     </>
  )
}

export default App
