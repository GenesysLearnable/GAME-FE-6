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
import Leaderboard from "./components/Leaderboard/Leaderboard";
import GameHistory from "./components/GameHistory/GameHistory";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
<<<<<<< HEAD
import SettingAll from "./components/SettingAll/SettingAll";
import Audio from "./components/SettingAudio/Audio";
import SettingFunFact from "./components/SettingFunFact/SettingFunFact";
import Tutorial from "./components/TutorialPage/Tutorial";
import Tutorial2 from "./components/TutorialPage/Tutorial2";
import Play from "./components/How to play/Play";
=======
import LevelOne from "./components/level1/LevelOne";
>>>>>>> 4d271b8abc939a0f32c2a1c478e52c6c06acb40f

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GameHistory" element={<GameHistory />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/PlayGame" element={<PlayGame />} />
        <Route path="/EndGame" element={<EndGame />} />
        <Route path="/About" element={<About />} />
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
<<<<<<< HEAD
        <Route path="/SettingAll" element={<SettingAll />} />
        <Route path="/settngaudio" element={<Audio />} />
        <Route path="/settingfunfact" element={<SettingFunFact />} />
        <Route path="/tutorialpage" element={<Tutorial />} />
        <Route path="/tutorial2" element={<Tutorial2 />} />
        <Route path="play" element={<Play/>}/>
=======
        <Route path="/gameplay/level1" element={<LevelOne />} />
        

>>>>>>> 4d271b8abc939a0f32c2a1c478e52c6c06acb40f
      </Routes>
    </BrowserRouter>
  );
}

export default App;
