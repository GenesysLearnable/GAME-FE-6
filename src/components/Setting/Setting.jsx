import React from "react";
import styles from "./Setting.module.css";
import { Link } from "react-router-dom";

function Setting() {
  return (
    <div>
      
      <img className={styles.background}
      src="images/page-bg.png" alt=" bg pic" />
      <div className={styles.container}>
        <img src="images/Frame 1000009099.png" />
      </div>
      <div className={styles.Setting}>
        <img src="images/Frame setting.png" alt="setting-frame" />
        <img src="images/Rectangle 17.png" alt="setting bg-frame" />

        <div className={styles.account}>
          <Link to="My Account">My Account</Link>
          <img src="images/2.png" alt="Account pic" />

          <div className={styles.play}>
            <Link to="How to play">How to play</Link>
            <img src="images/Frame 87.png" alt="play pic" />

            <div className={styles.Adio}>
              <Link to="Audio">Audio</Link>
              <img src="images/Frame 91.png" alt="Adio pic" />
              <div className={styles.features}>
                <Link to="Features">Features</Link>
                <img src="images/Frame 91.png" alt="Adio pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
