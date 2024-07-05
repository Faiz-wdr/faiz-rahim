import React from 'react';
import './ClientSection.css';
import svgImage from '../assets/images/image.svg';

const ResponsiveSection = () => {
  return (
    <div className="responsive-section">
      <div className="left-part">
        <h1 className='over'>Over <span className='num'>150</span>+<br/>
        Clients</h1>
        <h3 className='h3'>from 5+ Countries</h3>
        <p className='lp'>With satisfied clients from Saudi Arabia, Qatar, Kuwait, and beyond, I specialize in creating user-friendly interfaces and captivating graphics. My mission is to bring your vision to life with designs that are both innovative and effective.</p>
      </div>
      <div className="right-part">
        <img src={svgImage} alt="SVG Illustration" className="svg-image" />
        <img src={svgImage} alt="SVG Illustration" className="svg-image mobile" />
      </div>
    </div>
  );
}

export default ResponsiveSection;
