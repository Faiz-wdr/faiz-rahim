import React from 'react';
import './Footer.css';

const Footer = () => {

    const handleDownloadCV = () => {
        const cvFilePath = 'https://drive.google.com/file/d/1llHpa7DxvzHTTF61Bf0dFopXfYVzk3Yh/view?usp=sharing';
        window.location.href = cvFilePath;
      };

  return (
    <div className="footer-container">
      <div className="footer-left">
        &copy; <span className='faiz'>Faiz Rahim </span>&nbsp;• {new Date().getFullYear()}
      </div>
      <div className="footer-right">
        <nav className="footer-navigation">
          <a href="https://pickled-brace-695.notion.site/Faiz-s-Blog-b35325a941e74dc9bec5558652db278b?pvs=4">Blogs</a>
          <a href="https://pickled-brace-695.notion.site/Mohammed-Faiz-K-b2ddfc03a508464eb0f3751d0cf34c46?pvs=4">Portfolio</a>
        </nav>
        <button className="download-cv-button" onClick={handleDownloadCV}>Download CV</button>
      </div>
    </div>
  );
};

export default Footer;
