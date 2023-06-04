import React, { useEffect } from 'react'
import './Modal.css'
import Button from '../Button2/Button'

export interface ModalProps {
  open: boolean
  width?: string
  setOpenModal: (x: boolean) => React.MouseEventHandler<HTMLButtonElement>
}

function Modal({ open, width = '600px', setOpenModal }: ModalProps) {
  useEffect(() => {
    if (open && typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [open])

  return (
    <>
      {open && (
        <div
          className='modalBackground'
          onClick={() => {
            setOpenModal(false)
          }}
        >
          <div className='modalContainer' style={{ maxWidth: width }}>
            <div className='modalTitle'>
              <h3>Modal Title</h3>
              <button
                onClick={() => {
                  setOpenModal(false)
                }}
              >
                &times;
              </button>
            </div>
            <div className='modalBody'>
              <p>Are You Sure You Want to Continue?</p>
            </div>
            <div className='modalFooter'>
              <Button
                label='Cancel'
                className='mgR10'
                color='btn-outline-info'
                variant='outline'
                size='btn-md'
                onClick={() => {
                  setOpenModal(false)
                }}
              />
              <Button label='submit' color='btn-warning' size='btn-md' />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
