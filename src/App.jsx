
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/Herosection/herosection'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

function App() {

  return (
    <div className='App'>
      <div className="main">
          <Header />
          <HeroSection />
          <Footer />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App
