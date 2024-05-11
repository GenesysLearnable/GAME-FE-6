import React from 'react';
import fliplogo from '../../assets/fliplogo.png';
import '../../App.css'
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
     <header className='nav'>
        <div className="navbar">
            <div className="logo">
                <img src= {fliplogo} alt='Hero pic' />
            </div>
            <div className="navlinks">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about-us">About Us</Link></div>
                <div><button className='header_button'><Link className= "my-links"to="/signup">Get Started</Link></button></div>
            </div>
        </div>
    </header>
  )
}

export default Header