import React, { memo } from 'react'

const Button = ({text,changeCounter}) => {
    console.log(`button-${text}`)
  return (
    <button className='btn' onClick={changeCounter}>+</button>
  )
}

export default memo(Button)