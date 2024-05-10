import React from 'react'
import footer from '../../assets/footer.png'
import './footer.css'


function Footer() {
  return (
    <footer className='footer'>
        <img src={footer} alt='Footer Pic'/>
       <p className='center-txt'>Sharpen your mind and explore Nigeria's kind, with NaijaFlip,<div>the memory game you'll always find!</div> </p>

       <p className='left-txt'>Made with love by 2024 Learnable Group 6</p>
    </footer>
  )
}

export default Footer