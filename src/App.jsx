import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState(["one","two","three"]);
  const [item,setItem] = useState("");

  const changeName = (e)=>{
    e.preventDefault(); 
    setName([...name,item])
    setItem("")
  }
  
  return (
    <>
      <h1>Hello React</h1>
      <form>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="fname" placeholder="Your name.." value={item} onChange={(e)=>setItem(e.target.value)}/>
        <button className="btn" onClick={changeName}>add</button>
      </form>  
      <ul>
        {
          name.map((elem,index)=>{
            return <li key={index}>{elem}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
