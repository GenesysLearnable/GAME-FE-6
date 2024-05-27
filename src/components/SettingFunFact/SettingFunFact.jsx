import React from "react";

import { Link } from "react-router-dom";
import styles from "./SettingFunFact.module.css";
function SettingPAge() {
  // const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className={styles.settings_wrapper}>
        <div className={styles.bg_container}>
          <div className={styles.section_container}>
            <div className={styles.frame}>
              <img
                src="images/Rectangle 17.png"
                alt="setting bg-frame"
                className={styles.rectangle}
              />
              <img
                src="images/Frame setting.png"
                alt="setting-frame"
                className={styles.settingImage}
              />
            </div>

            <div className={styles.profile_section}>
              <div className={styles.profile_picture}>
           
            </div>
              <Link to="/Feature" className={styles.Feature_link}>
                Features
              </Link>
            </div>
            {/* <div className={styles.other_section}>
              <div className={styles.option}>
                <div className={styles.option_item}>
                  <button
                    className={`styles.toggle_btn ${toggled ? "toggled" : ""}`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <div className={styles.toggledbtn_thumb}></div>
                  </button> */}

            <Link to="/FunFact" className={styles.FunFact}>
              Fun Facts
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
    // </div>
  );
}

export default SettingPAge;
