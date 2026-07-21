import React, { memo } from 'react'

const Counter = ({text,counter}) => {
     
    console.log(`counter${text}: ${counter}`)
  return (
    <>
        <h4>counter-{text} =  {counter}</h4>
    </>
  )
}

export default memo(Counter)