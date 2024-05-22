import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import GamePage from "./pages/GamePage/GamePage";
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/Home/Home";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WelcomePage" element={<WelcomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/GamePage" element={<GamePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
