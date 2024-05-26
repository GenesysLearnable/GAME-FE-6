
import React from 'react'
import { useEffect, useState } from 'react';
import Styles from './LevelOne.module.css';
import SingleCard from './SingleCard';
import {funFacts} from './FunFacts';
import { CardOne, CardTwo,CardFive,CardFour,CardSeven,CardSix,CardThree,Back_of_Card,Emoji_coin,FraOne,FraTwo,FraThree,Home,Set,Fra4,Fra5,Avatar,} from '../../../public/images/';
import useSound from 'use-sound';
import soundFile from '../../../public/sound/FlipSound.mp3';

const cardImages = [
    { src: CardOne, matched: false },
    { src: CardTwo, matched: false }
  ];

function LevelOne() {
    const [cards, setCards] = useState([...cardImages, ...cardImages]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [timer, setTimer] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [funFact, setFunFact] = useState('');

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
          .sort(() => Math.random() - 0.5)
          .map((card) => ({ ...card, id: Math.random() }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
        setTimer(0);
        setFunFact('')
      };
    
      const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
         new Audio(soundFile).play();
      };
    
      useEffect(() => {
        if (choiceOne && choiceTwo) {
          setDisabled(true);
          if (choiceOne.src === choiceTwo.src) {
             setCards((prevCards) => {
               return prevCards.map((card) => {
                if (card.src === choiceOne.src) {
                   return { ...card, matched: true };
                 } else {
                   return card;
                 }
               });
             });
            resetTurn();
          } else {
            setTimeout(() => resetTurn(), 1000);
          }
        }
      }, [choiceOne, choiceTwo]);
       
      useEffect(() => {
        let intervalId;
        if (!gameOver) {
          intervalId = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
          }, 1000);
        }
        return () => clearInterval(intervalId);
      }, [gameOver]);
    
    
      useEffect(() => {
        if (cards.every((card) => card.matched)) {
          setGameOver(true);
          setFunFact(funFacts[Math.floor(Math.random() * funFacts.length - 1)]);
        }
      }, [cards]);
    
    
      const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((prevTurns) => prevTurns + 1);
        setDisabled(false);
      };
    
      useEffect(() => {
        shuffleCards();
      }, []);

      const calculateScore = () => {
  // Calculate the score based on turns and time
  const turnScore = (10 / turns) * 100; // Higher score for fewer turns
  const timeScore = Math.max(0, 60 - timer); // Subtract time spent (max 60 seconds)
  const totalScore = turnScore + timeScore;
  return totalScore;
 };


return (
    <div className={Styles.Level1}>
      <div className={Styles.level1_navbar}>
        <div className={Styles.level1_navlinks}>
            <div>
                <img src='../../../public/images/Fra4.png' alt='Logo pic' className={`${Styles.logo} ${Styles.imageSize}`} />
            </div>
            {/* <div>
                <img src='images/Fra6.png' alt='Logo pic' className={`${Styles.logo} ${Styles.imageSize_M}`} />
            </div> */}
            <div className={Styles.side_left}>
                <img src='../../../public/images/Home.png' alt='Logo pic' className={`${Styles.logo} ${Styles.imageSize}`} />
                <img src='../../../public/images/Set.png' alt='Logo pic' className={`${Styles.logo} ${Styles.imageSize}`} />
                <img src='../../../public/images/Emoji_coin.png' alt='Logo pic' className={`${Styles.logo} ${Styles.imageSize}`} />
            </div>

        </div>
      </div>
      <button className={Styles.level_button} onClick={shuffleCards}>New Game</button>
      <div className={Styles.card_grid}>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
            className={`${Styles.card} ${Styles.cardSize}`}
            
          />
        ))}
      </div>
      <div className={Styles.base_buttons}>
        <div>
            <button className={Styles.edit_buttons} onClick={() => setGameOver(true)}>Pause</button>
        </div>
        <div>
            <button className={Styles.edit_buttons} onClick={() => window.location.reload(false)}>Restart</button>
        </div>
      </div>
      <p className={Styles.turns}>Turns: {turns}</p>
      <p className={Styles.timer}>Timer: {timer} seconds</p>
        {gameOver && (
        <div className={Styles.Overlay}>
            <div className={Styles.game_over}>
                <button onClick={() => {setGameOver(false)}}>X</button>
            <p className={Styles.game_over_text}>Congratulations! You won in {turns} turns. <span>Your score: {calculateScore()} points</span>.</p>
            <div className={Styles.fun_facts}>
                    <p className={`${Styles.fun_fact} ${Styles.gradient1}`}>
                        Naija Fun Fact Alert! <br/>
                        {funFacts[Math.floor(Math.random() * funFacts.length)]}
                    </p>
                    <img src='images/Avatar.png' width='200px' height='180px' alt='Avatar Pic' />
                     
            </div>
            </div> 
        </div>
      )}   
    </div>
  );
};  


export default LevelOne

