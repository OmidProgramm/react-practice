import React, { useContext } from 'react'
import { MyContext } from '../../App'

const CompC = () => {
   let {myArray} = useContext(MyContext)
   
  return (
    <>
    <h5>CompC</h5>
    {
      myArray && myArray.map(elem=>{
        return <h6>{elem}</h6>
      })
    }
    </>
  )
}

export default CompC