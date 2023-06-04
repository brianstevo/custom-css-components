import React from 'react'
import './Button2.css'

export interface ButtonProps {
  type?: 'btn' | 'btn-block'
  size: 'btn-sm' | 'btn-md' | 'btn-lg'
  color: 'btn-primary' | 'btn-secondary' | 'btn-warning' | 'btn-success' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-black' | 'btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-warning' | 'btn-outline-success' | 'btn-outline-info' | 'btn-outline-black' | 'btn-teal' | 'btn-outline-teal' | 'btn-blue'
  fontColor?: ''
  variant?: 'normal' | 'outline'
  label: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

const Button = ({ type = 'btn', size = 'btn-lg', color = 'btn-primary', variant = 'normal', label, disabled = false, onClick, className = 'mg0' }: ButtonProps) => {
  return (
    <button className={`${type} ${size} ${color} btn-${variant} ${className}`} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button