import React from 'react';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className={styles.bundle}>
      <div className={styles.right_col}>
        <h1>
          NaijaFlip: Your <span className={styles.txt}>Fun escape </span> <div>to Nigerian Culture!</div>
        </h1>
        <div className={styles.bundle_lite}>
            <button className={styles.header_button}>
              <Link to='/SignUp' className={styles.my_links}>Get Started</Link>
            </button>
            <button className={styles.login}>
              <Link to='/SignIn' className={styles.my_link}>Sign in</Link>
            </button>
        </div>
      </div>
      <div className={styles.left_col}>
        <img src='images/msq6.png' alt='NaijaFlip' />
      </div>
    </div>
  );
};

export default HeroSection;
