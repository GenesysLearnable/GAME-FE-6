import React from 'react'
import styles from './GamePageHeader.module.css'


export default function GamePageHeader() {
  return (
      <header className={styles.gamePage_nav}>
          <div className={styles.gamePage_navbar}>
                <div className={styles.brandLogo}>
                    <img src= 'images/brandLogo.png' alt='Hero pic' />
                </div>
                <div className={styles.gamePage_navlinks}>
                      <div>Home</div>
                      <div>Tutorial</div>
                      <div>Cards</div>
                      <div>Game History</div>
                      <div>LeaderBoard</div>
                      <div>Settings</div>
                      <img src= 'images/2.png' alt='Profile Pic' />
                     
                </div>
          </div>
  
      </header>
  )
}
