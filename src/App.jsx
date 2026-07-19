import React, { createContext } from 'react'
import CompA from './components/CompA/CompA'
import './App.css';

export let MyContext = React.createContext();

function App() {
  let myArray = [8,6,9,7,4];
  let myObj = [
    {
      firstName: "First",
      lastName: "Last First",
      age: 43
    },
    {
      firstName: "Two",
      lastName: "Last Tow",
      age: 77
    }
  ]
  return (
    <MyContext.Provider value={{myArray,myObj}}>
      <h4>App</h4>
      <CompA/>
    </MyContext.Provider>
  )
}

export default App
