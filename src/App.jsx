import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import GamePage from "./pages/GamePage/GamePage";
// import NoPage from './pages/NoPage';
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/Home/Home";
import "./App.css";
import Setting2 from "./components/Setting/Setting";
// import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/Setting2" element={<Setting2 />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
