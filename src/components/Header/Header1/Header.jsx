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
<<<<<<< HEAD
                    <div><NavLink to="/" className={styles.Nav}>Home</NavLink></div>
                    <div><NavLink to="/GamePage" className={styles.Nav}>Game Page</NavLink></div>
                    <div>
                        <button className={styles.header_button}>
                            <NavLink to="/signUp">Get Started</NavLink>
                        </button>
=======
                <div><Link to="/GamePage">Game Page</Link></div>
                <div><Link to="/About">About Us</Link></div>
                <div>
                    <button className={styles.header_button}>
                        <Link to="/SignUp">Get Started</Link>
                    </button>
>>>>>>> e8217b92ff25da1597c915adb2edb50eac8eee1c
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
