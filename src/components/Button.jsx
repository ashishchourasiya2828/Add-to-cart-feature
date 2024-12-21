import React from 'react'

const Button = ({getdata}) => {
  return (
    <div>
        <button onClick={getdata} className='px-4 py-2 bg-blue-600 text-white rounded-md font-semibold ' >get data</button>
    </div>
  )
}

export default Button