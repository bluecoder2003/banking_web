// Landing.js

import React from 'react';
import './landing.css';
import Image1 from '../../assets/bank.png'

const Landing = () => {
  return (
    <div className="landing_container">

      <div className="navbar">
        <div className="logo">Your Logo</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </nav>
        <div className="auth_buttons">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      </div>

      <div className="landing_content" id="home">
        <div className="text">
        <div className="content_text"> 
          Bank securely,anywhere, anytime.
        </div>
        <div className="content_text1"> 
          Empowering your financial journey with seamless online banking experiences tailored to your needs
        </div> 
        <button className="get_started_button">
          Get Started
        </button>
        </div>
        <div className="content_image">
            <img src={Image1} alt="Your Image" />
        </div>
      </div>

      <div className="aboutus" id="about">
        <h2>About Us</h2>
      </div>

    </div>
  );
};

export default Landing;
