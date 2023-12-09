import React from 'react';
import './Footer.css';
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';
const Footer = () => {

    const handleDownloadCV = () => {
        const cvFilePath = 'https://drive.google.com/file/d/1llHpa7DxvzHTTF61Bf0dFopXfYVzk3Yh/view?usp=sharing';
        window.location.href = cvFilePath;
      };

      const gaEventTracker = useAnalyticsEventTracker('Contact us');

  return (
    <div className="footer-container">
      <div className="footer-left">
        &copy; <span className='faiz'>Faiz Rahim </span>&nbsp;• {new Date().getFullYear()}
      </div>
      <div className="footer-right">
        <nav className="footer-navigation">
          <a href="https://blog-faiz.notion.site/blog-faiz/Faiz-s-Blog-b35325a941e74dc9bec5558652db278b">Blogs</a>
          <a href="https://bento.me/faizrahim">Portfolio</a>
          <div>
     <div> 
       <a href="#" onClick={()=>gaEventTracker('call')}>Hire Me</a>
      </div>
      </div>
        </nav>
        
        <button className="download-cv-button" onClick={handleDownloadCV}>Download CV</button>
        
      </div>
    </div>
  );
};

export default Footer;
