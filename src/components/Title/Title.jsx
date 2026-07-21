import React, { memo } from 'react'

const Title = () => {
    console.log("*******************************************")
    console.log("Title mount")
  return (
    <div>Title</div>
  )
}

export default memo(Title)