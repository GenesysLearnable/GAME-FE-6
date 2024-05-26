import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import styles from "./ResetPassword.module.css"; // Import CSS module
import { Link, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [formInput, setFormInput] = useState({
    password: "",
  });

  const navigate = useNavigate();

  const SignIn = () => {
    navigate('/SignIn');
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  console.log(formInput);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://memsix.onrender.com/api/v1/player/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formInput),
        }
      );

      if (response.ok) {
        setShowSuccessMessage(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.resetpassword_wrapper}> {/* Apply module class */}
      <div className={styles["bg-container"]}> {/* Apply module class */}
        <div className={styles["resetpassword-container"]}> {/* Apply module class */}
          <h2 className={styles["resetpassword-header"]}>Reset Password</h2> {/* Apply module class */}
          <form onSubmit={handleSubmit}>
            <div className={styles["input-container"]}> {/* Apply module class */}
              <FontAwesomeIcon icon={faLock} className={styles.inputIcon} /> {/* Apply module class */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formInput.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" onClick={SignIn}>Reset Password</button>
          </form>

          {showSuccessMessage && (
            <div className={styles.success_popup}>
              <p>Password Reset</p>
            </div>
          )}
          {errorMessage && (
            <div className={styles.error_message}>
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
