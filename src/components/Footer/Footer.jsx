import React from 'react'
import footer from '../../assets/footer.png'
import './footer.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'



function Footer() {
  return (
    <footer className='footer'>
        <img src={footer} alt='Footer Pic'/>
       <p className='center-txt'>Sharpen your mind and explore Nigeria's kind, with NaijaFlip,<div>the memory game you'll always find!</div> </p>
       
       <div className='left-txt'>
          <div>
             <p>Copyright &copy; Made with love by 2024 Learnable Group 6</p>
          </div>
       
          <div>
              <ul className='social-icons'>
                  <li>
                    <a href="#"><FaFacebook size="24" color="blue" /></a>
                  </li>
                  <li>
                    <a href="#"><FaYoutube size="24" color="red" /></a>
                  </li>
                  <li>
                    <a href="#"><FaInstagram size="24" color="purple" /></a>
                  </li>
              </ul>
          </div>
       </div>
    </footer>
  )
}

export default Footer