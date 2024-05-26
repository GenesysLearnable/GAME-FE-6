import React from 'react'
import styles from './GamePageHeader.module.css'
import { Link } from 'react-router-dom';


export default function GamePageHeader() {
  return (
      <header className={styles.gamePage_nav}>
          <div className={styles.gamePage_navbar}>
                <div className={styles.brandLogo}>
                    <img src= 'images/brandLogo.png' alt='Hero pic' />
                </div>
                <div className={styles.gamePage_navlinks}>
                      <div>
                      <Link to="/">Home</Link></div>
                      <div><Link to="/">Tutorial</Link></div>
                      <div><Link to="/Card">Cards</Link></div>
                      <div><Link to="/GameHistory">Game History</Link></div>
                      <div><Link to="/Leaderboard">LeaderBoard</Link></div>
                      <div><Link to="/Settings">Settings</Link></div>
                      <img src= 'images/2.png' alt='Profile Pic' />
                     
                </div>
          </div>
  
      </header>
  )
}
