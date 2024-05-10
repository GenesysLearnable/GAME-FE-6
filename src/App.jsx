import React from "react";
import "./App.css";
import Signin from "./components/Signin";
import HeroSection from "./components/Herosection";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <Signin />
      
    </div>
  );
}
export default App;
