import React from 'react';
import './MainPage.css'
import HeroPage from '../Components/HeroPage';
import ProjectSection from '../Components/ProjectSection';
import ClientSection from '../Components/ClientSection'
import Footer from '../Components/Footer';
import Timeline from '../Components/Timeline';

function MainPage() {
  return (
    <div className='main-body'>
      <HeroPage />
      <Timeline />
      {/* <ProjectSection />   */}
      <ClientSection />
      <Footer />
    </div>
  )
}

export default MainPage