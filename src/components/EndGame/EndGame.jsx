import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faStepForward, faHistory, faHome, faTimes, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./EndGame.module.css";

function EndGame() {
    const navigate = useNavigate();

    const handleRestart = () => {
        window.location.reload();
    };

    const handleNext = () => {
        
        navigate("/nextpage"); 
    };

    const handleViewHistory = () => {
        navigate("/history");
    };

    const handleHome = () => {
        navigate("/home");
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.bg_container}>
                <div className={styles.section_container}>
                    <div className={styles.frame}>
                        <img src="images/Rectangle 17.png" alt="bg-frame" className={styles.rectangle} />
                        <div className={styles.header}>
                            <FontAwesomeIcon icon={faAngleLeft} className={styles.headerIcon} onClick={() => navigate(-1)} />
                            <span className={styles.headerText}>End Game</span>
                            <FontAwesomeIcon icon={faTimes} className={styles.headerIcon} onClick={() => navigate(-1)} />
                        </div>
                    </div>
                    <div className={styles.buttons_section}>
                        <div className={styles.button} onClick={handleRestart}>
                            <FontAwesomeIcon icon={faRedo} className={styles.icon} />
                            <span className={styles.text}>Restart</span>
                        </div>
                        <div className={styles.button} onClick={handleNext}>
                            <FontAwesomeIcon icon={faStepForward} className={styles.icon} />
                            <span className={styles.text}>Next</span>
                        </div>
                        <div className={styles.button} onClick={handleViewHistory}>
                            <FontAwesomeIcon icon={faHistory} className={styles.icon} />
                            <span className={styles.text}>View History</span>
                        </div>
                        <div className={styles.button} onClick={handleHome}>
                            <FontAwesomeIcon icon={faHome} className={styles.icon} />
                            <span className={styles.text}>Home</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EndGame;
