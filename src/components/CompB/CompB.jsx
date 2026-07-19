import React, { useContext } from 'react'
import CompC from '../CompC/CompC'
import { MyContext } from '../../App'

const CompB = () => {
  let {myObj} = useContext(MyContext)
    
  return (
    <>
        <h5>CompB = </h5>
        <div>
          {
            myObj && myObj.map(elem=>{
              return <div>
                <h6>{elem.firstName}</h6>
                <h6>{elem.lastName}</h6>
                <h6>{elem.age}</h6>
              </div>
            })
          }
        </div>
        <CompC/>
    </>
  )
}

export default CompB