import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './Collapsible.css'

export interface CollapsibleProps {
  title: string
  children?: ReactNode
  initialExpandedState?: Boolean
}

const CollapsibleV2 = ({ title, children, initialExpandedState = true }: CollapsibleProps) => {
  const [open, setOpen] = useState(initialExpandedState)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef.current && open) {
      divRef.current.style.maxHeight = divRef.current.scrollHeight + 'px'
    }
  }, [])

  const handleClick = () => {
    if (divRef.current) {
      if (divRef.current.style.maxHeight) {
        divRef.current.style.maxHeight = ''
      } else {
        divRef.current.style.maxHeight = divRef.current.scrollHeight + 'px'
      }
    }
    setOpen(!open)
  }

  return (
    <section className='collapsible'>
      <div className={open ? 'collapsible-header active' : 'collapsible-header '} onClick={handleClick}>
        <h3>{title}</h3>
      </div>
      <div className={open ? 'collapsible-content active' : 'collapsible-content '} ref={divRef}>
        <div className='collapsible-text'>{children}</div>
      </div>
    </section>
  )
}

export default CollapsibleV2
