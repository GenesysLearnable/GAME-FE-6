import React from 'react'
import './GameHomepage.css'
import fliplogo from '../assets/fliplogo.png';
import card1 from '../assets/card1.jpg';

function GameHomepage() {
  return (
    <div>
       <div className="game_home_nav">
           <div className="game_home_navbar">
                <div className="game_home_logo">
                    <img src= {fliplogo} alt='logo' /> 
                </div>
                <div className="game_home_navlinks">
                  <div><Link to="/">Home</Link></div>
                  <div><Link to="/tutorial">Tut0rial</Link></div>
                  <div><Link to="/cards">Cards</Link></div>
                  <div><Link to="/cards">Game History</Link></div>
                  <div><Link to="/cards">LeaderBoard</Link></div>
                  <div><Link to="/cards">Settings</Link></div>
                  <img src= {card1} />
                </div>
           </div>
       </div>
    </div>
  )
}

export default GameHomepage