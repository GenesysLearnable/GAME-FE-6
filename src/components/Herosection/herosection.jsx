import react from 'react';
import msq5 from '../../assets/msq5.png'
import './herosection.css'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className='bundle'>
            <div className="right-col">
                <h1>NaijaFlip: Your <span className='txt'>Fun escape </span> <div>to Nigerian Culture!</div></h1>
                <button className='header_button '><Link className= "my-links" to="/Signup">Get Started</Link></button>
                <button className='login'><Link className= "my-links"to="/Login">Sign in</Link></button>
            </div>
            <div className="left-col">
                <img src={msq5} />
            </div>
        </div>

      );
    
}

export default HeroSection;