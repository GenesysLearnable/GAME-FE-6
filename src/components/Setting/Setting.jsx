import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute, faVideo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Setting.module.css";

function Setting() {
    return (
        <div className={styles.settings_wrapper}>
            <div className={styles.bg_container}>
                <div className={styles.section_container}>
                <div className={styles.frame}>
                    <img src="images/Rectangle 17.png" alt="setting bg-frame" className={styles.rectangle} />
                    <img src="images/Frame setting.png" alt="setting-frame" className={styles.settingImage} />
                </div>
                    <div className={styles.settings_icons}>
                        <FontAwesomeIcon icon={faVolumeUp} />
                        <FontAwesomeIcon icon={faVolumeMute} />
                        <FontAwesomeIcon icon={faVideo} />
                    </div>
                    <div className={styles.profile_section}>
                        <div className={styles.profile_picture}>
                            <img src="images/2.png" alt="Account pic" className={styles.profileImage} />
                        </div>
                        <Link to="/my-account" className={styles.profile_link}>My Account</Link>
                    </div>
                    <div className={styles.other_section}>
                        <div className={styles.option}>
                            <div className={styles.option_item}>
                                <img src="images/Frame 87.png" alt="play pic" className={styles.optionImage} />
                                <Link to="/how-to-play" className={styles.optionLink}>
                                    How to play
                                </Link>
                                <span className={styles.angle}>&gt;</span>
                            </div>
                            <div className={styles.option_item}>
                                <img src="images/Frame 91.png" alt="audio pic" className={styles.optionImage} />
                                <Link to="/audio" className={styles.optionLink}>
                                    Audio
                                </Link>
                                <span className={styles.angle}>&gt;</span>
                            </div>
                            <div className={styles.option_item}>
                                <img src="images/Frame 91.png" alt="features pic" className={styles.optionImage} />
                                <Link to="/features" className={styles.optionLink}>
                                    Features
                                </Link>
                                <span className={styles.angle}>&gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
