import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { FaArrowUp } from 'react-icons/fa';
import Home from './pages/Home'
import SecurityInfrastructure from './pages/SecurityInfrastructure'
import Nids from './pages/Nids'
import Firewalls from './pages/Firewalls'
import Penetration from './pages/Penetration'
import Contactus from './pages/Contactus'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth',
    });
};

const handleScroll = () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  // Show the button when scrolled past 100vh, hide otherwise
  setIsVisible(scrollY > 100);
  };

useEffect(() => {
  // Function to handle scroll events

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Cleanup on component unmount
  return () => {
  window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <>
       <div className={`back-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <FaArrowUp />
        </div>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/security-infrastruture'
          element={<SecurityInfrastructure />}
        />
        <Route
          path='/network-intrusion-detection-systems'
          element={<Nids />}
        />
        <Route
          path='/firewalls'
          element={<Firewalls />}
        />
        <Route
          path='/penetration-testing'
          element={<Penetration />}
        />
        <Route
          path='/Contactus'
          element={<Contactus />}
        />
        <Route
          path='/About'
          element={<About />}
        />

      </Routes>
    </>
  )
}

export default App
