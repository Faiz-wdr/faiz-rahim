import React from 'react';
import './HeroPage.css';
import githubIcon from '../assets/icons/github_icon.png';
import linkedinIcon from '../assets/icons/linkedin_icon.png';
import pinterestIcon from '../assets/icons/pinterest_icon.png';
import instagramIcon from '../assets/icons/instagram_icon.png';
import heroGif from '../assets/images/hero.gif';
import scrollGif from '../assets/icons/scrollgif.gif'
const HeroPage = () => {
  return (
    <div className="hero-container">
      <img src={heroGif} alt="Hero Gif" className="hero-gif" />
      <h4 className="hero-heading">Web Developer & Designer</h4>
      <div className="social-icons">
        <a href="https://github.com/Faiz-wdr" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/mohammedfaizk/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://pin.it/DebkWbI" target="_blank" rel="noopener noreferrer">
          <img src={pinterestIcon} alt="Pinterest" className="social-icon" />
        </a>
        <a href="https://instagram.com/creative_faiz" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>
      <img src={scrollGif} alt="Hero Gif" className="scroll-gif" />
    </div>
  );
};

export default HeroPage;
