import React from 'react'
import styles from './GamePage.module.css'
import GamePageHeader from '../../components/Header/Header2/GamePageHeader';
import GamePageHeroSec from '../../components/GamePageHeroSec/GamePageHeroSec';


function GamePage() {
  return (
    <div >
      <GamePageHeader />
      <GamePageHeroSec />
    </div>
  )
}

export default GamePage;
