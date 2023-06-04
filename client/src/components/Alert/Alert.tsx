import React, { useState } from 'react'
import './Alert.css'

const Alert = ({ status = 'info', message = 'Enter Valid Message', disabled = false }) => {
  const [show, setShow] = useState(true)

  const handleClick = () => {
    console.log('go')

    setShow(!show)
  }
  return (
    <>
      {show && (
        <div className={`alert ${status}`}>
          {!disabled && (
            <div className='close' onClick={handleClick}>
              &times;
            </div>
          )}
          <p>{message}</p>
        </div>
      )}
    </>
  )
  // return (
  //   <>
  //     <h1>Alert</h1>
  //     <div className='alert success'>
  //       <div className='close'>&times;</div>
  //       <p>Alert message!</p>
  //     </div>
  //     <div className='alert warning'>
  //       <div className='close'>&times;</div>
  //       <p>Alert message!</p>
  //     </div>
  //     <div className='alert error'>
  //       <div className='close'>&times;</div>
  //       <p>Alert message!</p>
  //     </div>
  //     <div className='alert info'>
  //       <div className='close'>&times;</div>
  //       <p>Alert message!</p>
  //     </div>
  //     <div className='alert dark'>
  //       <div className='close'>&times;</div>
  //       <p>Alert message!</p>
  //     </div>
  //   </>
}

export default Alert
