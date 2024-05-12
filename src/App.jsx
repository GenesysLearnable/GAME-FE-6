
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/Herosection/herosection'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nopage from './pages/Nopage'
import GameHomepage from './pages/GameHomepage'


function App() {

  return (
        <BrowserRouter>
          <div className='App'>
            <div className="main">
                <Routes>
                  <Route index element = {<Home />} />                
                  <Route path='/home' element = {<Home />} />                        
                  <Route path='/gamehomepage' element = {<GameHomepage />} />                        
                  <Route path='*' element = {<Nopage />} />                
                </Routes>
            </div>
          </div>
        </BrowserRouter>
  )
}

export default App
