import React from 'react'
import './GridLayout.css'
const GridLayout = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>col 1</div>
        <div className='col'>col</div>
        <div className='col'>col</div>
        <div className='col'>col</div>
        <div className='col'>col</div>
        <div className='col'>col</div>
        <div className='col'>col</div>
        <div className='col'>col</div>
      </div>
      <div className='row'>
        <div className='col-1'>col12</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col</div>
        <div className='col-1'>col12</div>
      </div>
      <div className='row'>
        <div className='col-6'>col</div>
        <div className='col-6'>col</div>
      </div>
      <div className='row'>
        <div className='col-4'>col</div>
        <div className='col-4'>col</div>
        <div className='col-4'>col</div>
      </div>
      <div className='row'>
        <div className='col-3'>col</div>
        <div className='col-3'>col</div>
        <div className='col-3'>col</div>
        <div className='col-3'>col</div>
      </div>
      <div className='row'>
        <div className='col-5'>col</div>
        <div className='col-5'>col</div>
        <div className='col-2'>col</div>
      </div>
    </div>
  )
}

export default GridLayout
