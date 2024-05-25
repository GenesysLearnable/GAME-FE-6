import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import GamePage from "./pages/GamePage/GamePage";
import About from "./components/About/About";
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/Home/Home";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import EndGame from "./components/EndGame/EndGame";
import PlayGame from "./components/PlayGame/PlayGame";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlayGame" element={<PlayGame />} />
        <Route path="/EndGame" element={<EndGame />} />
        <Route path="/About" element={<About />} />
        <Route path="/WelcomePage" element={<WelcomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
