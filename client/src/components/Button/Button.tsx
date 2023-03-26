import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <div style={{ padding: '20px' }}>
      <button className='button-1' role='button' style={{ marginLeft: '20px' }}>
        Button 1
      </button>
      <button className='button-2' role='button' style={{ marginLeft: '20px' }}>
        Button 2
      </button>
      <button className='button-3' role='button' style={{ marginLeft: '20px' }}>
        Button 3
      </button>
      <button className='button-4' role='button' style={{ marginLeft: '20px' }}>
        Button 4
      </button>
    </div>
  )
}

export default Button
