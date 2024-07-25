import React from 'react'

const Child = ({ changeBackground }) => {
    const handleChange=(e)=>{
        changeBackground(e.target.value)
    }
  return (
    <div>
        <input onChange={handleChange} placeholder='Default color is grey' className='border-2 p-2 border-black rounded'/>
    </div>
  )
}

export default Child