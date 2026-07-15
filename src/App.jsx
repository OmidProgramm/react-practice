import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({
    fullname: "Hello",
    email: "react"
  })
  
  return (
    <>
      <h1>Hello React</h1>
      <form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e)=>setUser({...user,fullname:e.target.value})}/>

        <label for="email">Last Name</label>
        <input type="text" id="email" name="email" placeholder="Your email .." onChange={(e)=>setUser({...user,email:e.target.value})}/>

        <label for="country">Country</label>
        <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
        </select>

        <input type="submit" value="Submit"></input>
        <h3>fulllname: {user.fullname}</h3>
        <h3>email: {user.email}</h3>
  </form>  



    </>
  )
}

export default App
