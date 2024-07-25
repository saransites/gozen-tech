import React, { useState } from 'react'
import Child from './Child'

const Task8 = () => {
    const [Color,setColor]=useState("grey")
    const changeBackground=(color)=>{
        setColor(color)
    }
  return (
    <div className='flex flex-col items-center'>
        <div style={{backgroundColor:Color}} className={`w-44 h-44`}></div>
        <Child changeBackground={changeBackground} />
    </div>
  )
}

export default Task8