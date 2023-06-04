import React from 'react'
import './Button.css'

export interface ButtonProps {
  label: string
  disabled: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  return (
    <div style={{ padding: '20px' }}>
      <button className='button-1' onClick={props.onClick} style={{ marginLeft: '20px' }}>
        Button 1
      </button>
      <button className='button-2' style={{ marginLeft: '20px' }}>
        Button 2
      </button>
      <button className='button-3' style={{ marginLeft: '20px' }}>
        Button 3
      </button>
      <button className='button-4' style={{ marginLeft: '20px' }}>
        Button 4
      </button>
    </div>
  )
}

export default Button
