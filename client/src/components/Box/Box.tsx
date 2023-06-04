import React, { ReactNode } from 'react'
import './Box.css'

export interface ButtonProps {
  borderRadius?: 0 | 1 | 2 | 3 | 4 | 5
  shadow?: 0 | 1 | 2 | 3 | 4
  children?: ReactNode
}

const Box = ({ borderRadius = 0, shadow = 0, children }: ButtonProps) => {
  return (
    <div className={`box shadow-${shadow}`} style={{ borderRadius: borderRadius }}>
      {children}
    </div>
  )
}

export default Box
