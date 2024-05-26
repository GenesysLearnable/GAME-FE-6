import React from 'react';
import card7 from "/public/images/card7.png";
import card5 from "/public/images/card5.png";
import card15 from "/public/images/card15.png";
import styles from './About.module.css';


const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.backgroundImage} />
      <div className={styles.aboutHeaderContainer}>
        <span className={styles.arrowLeft}>&larr;</span>
        <h1 className={styles.aboutHeader}>ABOUT US</h1>
        <span className={styles.arrowRight}>&rarr;</span>
      </div>

      <div className={styles.cardContainer}>
        <div className={`${styles.Aboutcard} ${styles.card7}`}>
          <img className={styles.AboutImg} src={card7} alt="Card 7" />
        </div>

        <div className={`${styles.Aboutcard} ${styles.cardSingle}`}>
          <img className={styles.AboutImg} src={card5} alt="Card 10" />
        </div>

        <div className={`${styles.Aboutcard} ${styles.card15th}`} > 
          <img className={styles.AboutImg} src={card15} alt="Card 15" />
        </div>
      </div>

      <div className={styles.text}>
        <p className={`${styles.aboutParagraph} ${styles.aboutParagraphOne}`}>
          Ready to boost your brain power and take a trip to Nigeria... All at Once?
        </p>
        <br />
        <p className={styles.aboutParagraph}>
          NaijaFlip isn&apos;t your average memory game. It&apos;s a thrilling mix of brain-teasing challenges and immersive cultural discovery. Match colorful cards featuring Nigerian artefacts, rack up points, and unlock intriguing facts along the way. Get ready for an unforgettable journey that keeps your mind sharp while expanding your knowledge of Nigeria!
        </p>
      </div>
      
    </div>
  );
};

export default About;
