import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo, faSignOutAlt, faTimes, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./PlayGame.module.css";
import { useNavigate } from "react-router-dom";

function PlayGame() {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(true);

    const handleBack = () => {
        navigate(-1); 
    };

    const handleCancel = () => {
        navigate(-1); 
    };

    const handleContinue = () => {
        setIsPlaying(!isPlaying);
        // Add logic to continue/pause the game
    };

    const handleRestart = () => {
        window.location.reload(); 
    };

    const handleExit = () => {
        navigate("/welcome"); 
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg_container}>
                <div className={styles.section_container}>
                    <div className={styles.frame}>
                        <img src="images/Rectangle 17.png" alt="bg-frame" className={styles.rectangle} />
                        <div className={styles.header}>
                            <FontAwesomeIcon icon={faAngleLeft} className={styles.headerIcon} onClick={handleBack} />
                            <span className={styles.headerText}>Play Game</span>
                            <FontAwesomeIcon icon={faTimes} className={styles.headerIcon} onClick={handleCancel} />
                        </div>
                    </div>
                    <div className={styles.buttons_section}>
                        <div className={styles.button} onClick={handleContinue}>
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className={styles.icon} />
                            <span className={styles.text}>{isPlaying ? "Pause" : "Continue"}</span>
                        </div>
                        <div className={styles.button} onClick={handleRestart}>
                            <FontAwesomeIcon icon={faRedo} className={styles.icon} />
                            <span className={styles.text}>Restart</span>
                        </div>
                        <div className={styles.button} onClick={handleExit}>
                            <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
                            <span className={styles.text}>Exit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayGame;
