import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./Styles/LandingPage.css"
import BackgroundStyle from '../Components/BackgroundStyle';
import Navbar from '../Components/Navbar';


const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="landing-container">
      {/* <Navbar/> */}
      <div className="landing-content">
        <h1 className="title">Welcome to <span className="highlight">VibeMatch</span></h1>
        <p className="subtitle">Find your chaotic soulmate in under 60 seconds ⚡</p>
        <button className="cta-button" onClick={() => navigate('/quiz')}>
          Take the Vibe Check 🔮
        </button>
      </div>
    </div>
  )
}

export default LandingPage