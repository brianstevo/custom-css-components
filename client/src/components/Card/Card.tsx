import React from 'react'
import Button from '../Button/Button'
import './Card.css'
const Card = () => {
  return (
    <>
      <div className='card' style={{ margin: '20px' }}>
        <img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' alt='' />
        <div className='card-body'>
          <div className='card-row'>
            <div className='card-title'>
              <h4>Nike Sneaker</h4>
              <h3>120</h3>
            </div>
            <div className='view-btn'>
              <button className='button-3' role='button'>
                Button 3
              </button>
            </div>
          </div>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.</p>
        </div>
      </div>
    </>
  )
}

export default Card
