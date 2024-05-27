import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";


function SignIn() {
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate= useNavigate();

  const GamePage = () => {
    navigate('/GamePage');
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

    if (formInput.username.length < 3) {
      setErrorMessage("Username must be at least 3 characters long.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formInput.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

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
        "https://memsix.onrender.com/api/v1/player/signup",
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
      //.console.error("Error:", error.message);
      // setErrorMessage("An error occurred during form submission.");
      console.log(error.message);
    }
  };

  return (
    <div className={styles.signin_wrapper}>
      <div className={styles.bg_container}>
        <div className={styles.signin_container}>
          <p className={styles.signin_link}>
            Need an account? <Link to="/SignUp">Sign up</Link>
          </p>
          <h2 className={styles.signin_header}>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <FontAwesomeIcon icon={faUser} />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formInput.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.input_container}>
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
            <div className={styles.Signin_button}>
              <button type="submit" onClick={GamePage}>
                Sign in
          
              </button>
            </div>
            <p className={styles.signin_link}>
            Forgot Password? <Link to="/ForgotPassword">Click Here</Link>
          </p>
           
        
          </form>

          {showSuccessMessage && (
            <div className={styles.success_popup}>
              <p>You have successfully signed In!</p>
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

export default SignIn;
