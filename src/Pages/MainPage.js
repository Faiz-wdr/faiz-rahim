import React from 'react';
import './MainPage.css'
import HeroPage from '../Components/HeroPage';
import ProjectSection from '../Components/ProjectSection';
import Footer from '../Components/Footer';
import Timeline from '../Components/Timeline';

function MainPage() {
  return (
    <div className='main-body'>
      <HeroPage />
      <Timeline />
      <ProjectSection />  
      <Footer />
    </div>
  )
}

export default MainPage