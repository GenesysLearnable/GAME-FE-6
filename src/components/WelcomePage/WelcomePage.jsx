import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import styles from "./WelcomePage.module.css";

function WelcomePage() {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const navigate = useNavigate();

    const levels = [
        { name: "Level 1", link: "/gameplay/level1" },
        { name: "Level 2", link: "/gameplay/level2" },
        { name: "Level 3", link: "/gameplay/level3" },
        { name: "Level 4", link: "/gameplay/level4" },
        { name: "Level 5", link: "/gameplay/level5" },
        { name: "Level 6", link: "/gameplay/level6" },
    ];

    const handlePlay = () => {
        if (selectedLevel !== null && selectedLevel <= currentLevel) {
            navigate(levels[selectedLevel - 1].link);
        }
    };

    return (
        <div className={styles.welcome_wrapper}>
            <div className={styles.bg_container}>
                <div className={styles.levels_container}>
                    <div className={styles.welcome_header}>
                        <Link to="/previousPage">
                            <span className={styles.back_bracket}>&lt;</span>
                        </Link>
                        <h2 className={styles.welcome_title}>Welcome!</h2>
                    </div>
                    <div className={styles.levels_list}>
                        {levels.map((level, index) => (
                            <div
                                key={index}
                                className={`${styles.level} ${index + 1 === selectedLevel ? styles.selected_level : ''}`}
                                onClick={() => setSelectedLevel(index + 1)}
                            >
                                {index + 1 <= currentLevel ? (
                                    <span>{level.name}</span>
                                ) : (
                                    <span className={styles.disabled_level}>{level.name}</span>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttons_container}>
                        <button 
                            className={styles.play_button}
                            onClick={handlePlay}
                            aria-label="Play"
                        >
                            <FontAwesomeIcon icon={faPlay} /> <span>Play</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
