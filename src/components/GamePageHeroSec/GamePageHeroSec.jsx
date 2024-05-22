import React from 'react'
import styles from './GamePageHeroSec.module.css';

function GamePageHeroSec() {
  return (
    <div className={styles.HeroSec_bundle}>
        <div className={styles.HeroSec_left_col}>
              <h1>
                  Welcome <span className={styles.txt_color}>Sonia!!!<br /></span>
                          LET'S PLAY A <br />
                          <span className={styles.txt_color}>GAME!!!</span>
              </h1>
              <button className={styles.Begin}>Start Tutorial</button>
              <button className={styles.Begin}>Play</button>
        </div>
        
        <div className={styles.HeroSec_right_col}>
            <img src='images/CardN1.png' className={styles.N1} width={200} height={275}/>
            <img src='images/CardN6.png' className={styles.N3} width={200} height={250}/>
            <img src='images/CardN5.png' className={styles.N2} width={200} height={275}/>
            <div className={styles.artefact}>
                <img src='images/CardN4.png' className={styles.N4} width={200} height={275} />
                <img src='images/CardN3.png' className={styles.N5} width={200} height={250}/>
                <img src='images/CardN2.png' className={styles.N6} width={200} height={275}/>
            </div>
        </div>
    </div>
  )
}

export default GamePageHeroSec;