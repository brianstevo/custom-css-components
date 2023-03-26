import React from 'react'
import './Alert.css'

const Alert = () => {
  return (
    <div className='alert success'>
      <div className='close'>&times;</div>
      <p>alert message!</p>
    </div>
  )
}

export default Alert
