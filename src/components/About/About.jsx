// import React from 'react';
import card7 from "/public/images/card7.png"
import card5 from "/public/images/card5.png"
import card15 from "/public/images/card15.png"

import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="background-image" />
      <div className="about-header-container">
        <span className="arrow-left">&larr;</span>
        <h1 className="about-header">ABOUT US</h1>
        <span className="arrow-right">&rarr;</span>
      </div>

      <div className="card-container">
        <div className="card card7 "> 
          <img src={card7} alt="Card 7" />
        </div>

        <div className="card card-single">
          <img src={card5} alt="Card 10" />
        </div>

        <div className="card ">
          <img src={card15} alt="Card 15" />
        </div>
      </div>

      <div className="text">
        <p className="about-paragraph about-paragraph-one">Ready to boost your brainpower? 
        <br /> Here is a game... all in one trip to Nigeria.</p> <br />
        <p className="about-paragraph">
          <ul>
            <li>NaijaFlip isn&apos;t your average memory game. It&apos;s a thrilling mix of brain- teasing challenges and immersive cultural discovery.</li>
            <li>Match colorful cards featuring Nigerian artefacts, rack up points, and unlock intriguing facts along the way.</li>
            <li>Get ready for an unforgettable journey that keeps your mind sharp while expanding your knowledge of Nigeria!</li>
          </ul>
        </p>
      </div>

    </div>
  );
};

export default About;