import React, { useState } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function Signup(){
  const [formInput, setFormInput] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formInput.username.length < 3) {
      setErrorMessage('Username must be at least 3 characters long.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formInput.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formInput.password.length < 8 ||
        !/[A-Z]/.test(formInput.password) ||
        !/[a-z]/.test(formInput.password) ||
        !/\d/.test(formInput.password) ||
        !/[^a-zA-Z\d\s]/.test(formInput.password)) {
      setErrorMessage('Password must be at least 8 characters long and include uppercase letters, lowercase letters, a number, and a special character.');
      return;
    }

    try {
      const response = await fetch('https://memsix.onrender.com/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInput),
      });

      if (response.ok) {
        setShowSuccessMessage(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred during form submission.');
    }
  };

  return (
    <div className="bg-container">
      <div className="signup-container">
        <p className="signin-link">Already have an account? <a href="#">Sign in</a></p>
        <h2 className="signup-header">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
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
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formInput.email}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit">Sign Up</button>
        </form>
        
        {showSuccessMessage && (
          <div className="success-popup">
            <p>You have successfully signed up!</p>
          </div>
        )}
        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;