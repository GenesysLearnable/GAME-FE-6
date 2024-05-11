import React from "react";
import "./Signin.css";

import { useRef, useEffect, useState } from "react";

const Signin = () => {
  const useMe = useRef(null);
  const errRef = useRef(null);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useMe.current.focus();
  }, []);
  useEffect(() => {
    setErrorMessage("");
  }, [user, password]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password, "Value");

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
        "https://memsix.onrender.com/api/v1/player/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            email: user,
            password: password,
          },
        }
      );

      if (response.ok) {
        // setShowSuccessMessage(true);
        return;
      } else {
        const data = await response.json();
        // setErrorMessage(data.message);
        return;
      }
    } catch (error) {
      // console.error("Error:", error.message);
      // setErrorMessage("An error occurred during form submission.");
      console.log(error.message);
    }
  };

  return (
    <div className="Wrap">
      <>
        {success ? (
          <section>
            <h1>You are logged in!</h1> <br />
            <p>
              <a href="ä">Go to Home</a>
            </p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errorMessage ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {" "}
              {errorMessage}
            </p>

            <h1>Sign In</h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor="Email"> Email address </label> <br />
              <input
                type="text"
                id="username"
                ref={useMe}
                autoCorrect="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />{" "}
              <br />
              <label htmlFor="paswword">Password </label> <br />
              <input
                type="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              ></input>{" "}
              <br />
              <button className="base-line"> Sign in</button>
            </form>
            {/* <p>
              <label >
                <input className="check"
                type="checkbox"></input></label >
              Remember me
            </p> */}
            <p>
              Don't have an account?
              <span className="line">
                {/* // put rounter link here */}
                <a href="a"> Sign Up</a>
              </span>
            </p>
          </section>
        )}
      </>
    </div>
  );
};

export default Signin;
