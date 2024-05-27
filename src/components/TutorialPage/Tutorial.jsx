import React from "react";

;
import styles from "./Tutorial.module.css";

function Tutorial() {
  return (
    <div>
      <div className={styles.settings_wrapper}>
        <div className={styles.bg_container}>
          <div className={styles.brandLogo}>
            <img src="images/brandLogo.png" alt="Hero pic" />
          </div>
          <div className={styles.gamePage_navlinks}>
            <div>Home</div>
            <div>Tutorial</div>
            <div>Cards</div>
            <div>Game History</div>
            <div>LeaderBoard</div>
            <div>Settings</div>
            <img src="images/2.png" alt="Profile Pic" />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
