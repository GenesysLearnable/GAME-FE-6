import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
     <header className={styles.nav}>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src= 'images/brandLogo.png' alt='Hero pic' />
            </div>
            <div className={styles.nav_links}>
                <div><Link to="/GamePage">Game Page</Link></div>
                <div><Link to="/About">About Us</Link></div>
                <div>
                    <button className={styles.header_button}>
                        <Link to="/SignUp">Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
