import React from "react";

import styles from "./Tutorial.module.css";

function Tutorial2() {
  const tutorial2 = [
    {
      id: 1,
      title:
        "Choose Difficulty Level: After signing in and landing on the homepage, players click on 'Play' and is prompted to select a level which the player has to progress through",
    },
    {
      id: 2,
      title:
        "Start Level 1: Players start at Level 1 and are then directed to the game interface",
    },
    {
      id: 3,
      title:
        "Game Interface: Upon entering the game interface, players briefly see all cards facing up for about 5 seconds. Then, the cards automatically flip upside down",
    },
    {
      id: 4,
      title:
        "Match Cards: Players are tasked with clicking on two cards to reveal their hidden images. The goal is to find matching pairs of cards",
    },
    {
      id: 5,
      title:
        "Gameplay Continues: Players continue to select pairs of cards until all cards are facing up. If two incorrect cards are selected, they are turned face down again almost immediately",
    },
    {
      id: 6,
      title:
        "Level Completion: Once all cards are successfully matched and facing up, a congratulations message pops up on the screen along with a fun fact about Nigeria",
    },
    {
      id: 7,
      title:
        "Move to Next Level: After completing the level, players automatically progress to the next level within the chosen difficulty level",
    },
    {
      id: 8,
      title:
        "Repeat and Advance:The gameplay cycle repeats as players progress through each level, facing increasingly challenging card arrangements and discovering new fun facts about Nigeria along the way.",
    },
  ];
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

            {/* <div>
        <Link to="/tutorial2" className={styles.optionLink}>
                  How to play
                </Link>
      </div> */}
          </div>
        </div>
      </div>
      <div className={styles.Tutorial2}>
        <h1>Read to play </h1>

        <ol type="1">
          {tutorial2.map((tutorial2, idx) => (
            <li key={idx}>{tutorial2.title}</li>
          ))}
        </ol>
      </div>
      {/* <Link to="/features" className={styles.optionLink}>
                  Features
                </Link> */}
    </div>
  );
}

export default Tutorial2;
