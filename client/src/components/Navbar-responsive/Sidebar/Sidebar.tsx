import { useState } from 'react'
import './Sidebar.css'

function Sidebar() {
  const [click, setClick] = useState(false)

  return (
    <nav>
      <div className='text-align-right'>
        <ul id='primary-menu' className='menu nav-menu'>
          <li className='menu-item current-menu-item' style={{ marginLeft: 'auto' }}>
            <a className='nav__link' href='#'>
              Sidebar
            </a>
          </li>
        </ul>
      </div>
      <div className='dropdown' style={{ float: 'right' }}>
        <button className='dropbtn'>Right</button>
        <div className='dropdown-content'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
