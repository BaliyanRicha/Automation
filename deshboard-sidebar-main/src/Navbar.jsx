import React from 'react'
import './Navbar.css'
import logo from './logo.PNG'

const Navbar = () => {
  return (
    <div className='navb'>
        <a href='/' className='right-nav'>
            <img src={logo} className='image-left' alt='' />
            <h2>AUTOMATION</h2> 
        </a>

        <div className='left-nav'>
            <h3 className='left-head'> Hello Richa</h3>
            <span className='wave'>👋</span>
        </div>

     </div>
  )
}

export default Navbar