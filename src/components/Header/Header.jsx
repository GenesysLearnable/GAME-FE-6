import React from 'react';
import fliplogo from '../../assets/fliplogo.png';
import '../../App.css'
import './header.css'

function Header() {
  return (
     <header className='nav'>
        <div className="navbar">
            <div className="logo">
                <img src= {fliplogo} alt='Hero pic' />
            </div>
            <div className="navlinks">
                <div><a href="./">Home</a></div>
                <div><a href="./About Us">About Us</a></div>
                <div><a href="./Signin"><button className='header_button'>Get Started</button></a></div>
            </div>
        </div>
    </header>
  )
}

export default Header