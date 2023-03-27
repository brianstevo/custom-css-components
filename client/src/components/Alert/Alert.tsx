import React from 'react'
import './Alert.css'

const Alert = () => {
  return (
    <>
      <h1>Alert</h1>
      <div className='alert success'>
        <div className='close'>&times;</div>
        <p>Alert message!</p>
      </div>
    </>
  )
}

export default Alert
