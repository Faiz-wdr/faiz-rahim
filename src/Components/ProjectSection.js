import React from 'react';
import './ProjectSection.css';
import landscapeImage from '../assets/images/landscape_project.png';
import portraitImage from '../assets/images/portrait_project.png';

const ProjectSection = () => {
  return (
    <div className="project-section-container">
      <div className="project-left">
        <h2>Recent Projects</h2>
        <div className="project-card-land">
          <img src={landscapeImage} alt="Landscape Project" className="project-image" />
          <h3>SOCIUM: Finding Your Real Learning Partner</h3>
          <p className="project-description">
          Socium is a web app that connects people with similar interests to find learning partners. It helps users learn and share skills together. You create a profile, and select a matching compatible learning partner. You can chat securely and set up learning sessions based on your schedules. Socium fosters motivation and accountability, making learning enjoyable and effective. It also helps build friendships and professional networks within the learning community.
          </p>
        </div>
      </div>
      <div className="project-right">
        <div className="project-card-port">
          <img src={portraitImage} alt="Portrait Project" className="project-image" />
          <h3>TripSpark: QR Based Bus Pass App</h3>
          <p className="project-description">
          TripSpark is an innovative mobile app that ensures safe school bus journeys for students. With its QR code-based verification system, bus faculty can generate unique QR codes for each student, confirming their presence when they board the bus. Parents can track the school bus in real-time using the app, getting updates on its location and estimated arrival time, which brings them peace of mind. The app also offers a convenient payment feature for bus fare, making the entire transportation process more efficient and secure for everyone involved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
