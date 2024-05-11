import react from 'react';
import msq5 from '../../assets/msq5.png'
import './herosection.css'

const HeroSection = () => {
    return (
        <div className='bundle'>
            <div className="right-col">
                <h1>NaijaFlip: Your <span className='txt'>Fun escape </span> <div>to Nigerian Culture!</div></h1>
                <a href="../Signup"><button className='header_button '>Get Started</button></a>
                <a href="./Login">
                <button className='login'>Sign in</button></a>
            </div>
            <div className="left-col">
                <img src={msq5} />
            </div>
        </div>

      );
    
}

export default HeroSection;