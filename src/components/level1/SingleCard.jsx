import React from 'react';
import styles from './SingleCard.module.css'; // Import CSS module
import { Back_of_Card } from '../../../public/images';

export default function SingleCard( {card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className={styles.card}> 
            <div className={flipped ? styles.flipped : ""}> 
                 <img className={styles.front} src={card.src} alt="card front" />  
                
                <img
                    className={styles.back}
                    src={Back_of_Card}
                    onClick={handleClick}
                    alt="card back"
                />
            </div>
        </div>
    );
}
