import React from 'react';
import './MainPage.css'
import HeroPage from '../Components/HeroPage';
import ProjectSection from '../Components/ProjectSection';
import Footer from '../Components/Footer';

function MainPage() {
  return (
    <div>
      <HeroPage />
      <ProjectSection />
      <Footer />
    </div>
  )
}

export default MainPage