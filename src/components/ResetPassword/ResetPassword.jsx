import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [formInput, setFormInput] = useState({
    password: "",
  });

  const navigate= useNavigate();

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

    // if (formInput.username.length < 3) {
    //   setErrorMessage("Username must be at least 3 characters long.");
    //   return;
    // }

    // if (!/\S+@\S+\.\S+/.test(formInput.email)) {
    //   setErrorMessage("Please enter a valid email address.");
    //   return;
    // }

    // if (
    //   formInput.password.length < 8 ||
    //   !/[A-Z]/.test(formInput.password) ||
    //   !/[a-z]/.test(formInput.password) ||
    //   !/\d/.test(formInput.password) ||
    //   !/[^a-zA-Z\d\s]/.test(formInput.password)
    // ) {
    //   setErrorMessage(
    //     "Password must be at least 8 characters long and include uppercase letters, lowercase letters, a number, and a special character."
    //   );
    //   return;
    // }

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
      // console.error("Error:", error.message);
      // setErrorMessage("An error occurred during form submission.");
      console.log(error.message);
    }
  };

  return (
    <div className="resetpassword_wrapper">
        <div className="bg-container">
          <div className="resetpassword-container">
            <h2 className="resetpassword-header">Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
              <FontAwesomeIcon icon={faLock} />
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