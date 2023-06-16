import React, { ReactNode } from 'react'
import style from './FlexGrid.module.css'

export interface FlexContainerProps {
  className?: string
  children?: ReactNode
}

export interface FlexColumnProps {
  className?: string
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  children?: ReactNode
}

const FlexContainer = ({ className = '', children }: FlexContainerProps) => {
  return <div className={`${style['flex-container']} ${className}`}>{children}</div>
}

const FlexRow = ({ className = '', children }: FlexContainerProps) => {
  return <div className={`${style['flex-row']} ${className}`}>{children}</div>
}

const FlexColumn = ({ className = '', xs = '', sm = '', md = '', lg = '', xl = '', children }: FlexColumnProps) => {
  // console.log(xl ? true : false)
  // let classname = ``
  // classname = xs ? `flex-col-xs-${xs}` : ''
  // classname = classname + ' ' + (sm ? `flex-col-sm-${sm}` : '')
  // classname = classname + ' ' + (md ? `flex-col-md-${md}` : '')
  // classname = classname + ' ' + (lg ? `flex-col-lg-${lg}` : '')
  // classname = classname + ' ' + (xl ? `flex-col-xl-${xl}` : '')
  // classname = `${classname} ${className}`.trim()
  // classname = `${xs && style[`flex-col-xs-${xs}`]}`
  return <div className={`${xs && style[`flex-col-xs-${xs}`]} ${sm && style[`flex-col-sm-${sm}`]} ${md && style[`flex-col-md-${md}`]} ${lg && style[`flex-col-lg-${lg}`]} ${xl && style[`flex-col-xl-${xl}`]} ${className && className}`}>{children}</div>
}

export { FlexContainer, FlexRow, FlexColumn }
