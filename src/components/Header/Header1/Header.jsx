import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';


function Header() {
  return (
     <header className={styles.nav}>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src= 'images/brandLogo.png' alt='Hero pic' />
            </div>
            <div className={styles.nav_links}>
                <div><NavLink to="/GamePage">Game Page</NavLink></div>
                <div><NavLink to="/About">About Us</NavLink></div>
                <div>
                    <button className={styles.header_button}>
                        <NavLink to="/SignUp">Get Started</NavLink>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
