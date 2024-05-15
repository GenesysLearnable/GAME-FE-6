import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


function Footer() {
  return (
    <footer className={styles.footer}>
        <img src='images/footer.png' alt='Footer Pic'/>
       <p className={styles.center_txt}>
          <div>
            Sharpen your mind and explore Nigeria's kind, with NaijaFlip,<br/>the memory game you'll always find!
          </div> 
        </p>
       
       <div className={styles.left_txt}>
          <div>
             <p>Copyright &copy; Made with love by 2024 Learnable Group 6</p>
          </div>
       
          <div>
              <ul className={styles.social_icons}>
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

export default Footer;
