import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  return (
    <nav className={click ? 'navbar menu-active' : 'navbar'}>
      <div className='logo'>
        <p>Navbar with full Toggle</p>
      </div>
      <div className='push-left'>
        <button id='menu-toggler' className={click ? 'hamburger menu-active' : 'hamburger'} onClick={(e) => setClick(!click)}>
          <span className='hamburger-line hamburger-line-top'></span>
          <span className='hamburger-line hamburger-line-middle'></span>
          <span className='hamburger-line hamburger-line-bottom'></span>
        </button>
        <ul id='primary-menu' className='menu nav-menu'>
          <li className='menu-item current-menu-item'>
            <a className='nav__link' href='#'>
              Home
            </a>
          </li>
          <li className='menu-item current-menu-item'>
            <a className='nav__link' href='#'>
              Home
            </a>
          </li>
          <li className='menu-item current-menu-item'>
            <a className='nav__link' href='#'>
              Home
            </a>
          </li>
          <li className='menu-item '>
            <a className='nav__link' href='#'>
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
