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
          <h3>AQSA Official Website: Crafting an Elegant Online Presence</h3>
          <p className="project-description">
          The official website for <a className='p-link' href='https://www.alqamaraqsa.online'>AQSA</a> Student Association has been meticulously designed and developed, ensuring a seamless and responsive user experience. This elegant and modern platform showcases AQSA's student-centric initiatives. Focused on creating a visually appealing interface that adapts to various devices, the site serves as a hub for students to explore AQSA's offerings and reflects the association's commitment to professionalism and excellence. Explore this responsive website to witness a harmonious blend of design aesthetics and functionality.
          </p>
        </div>
      </div>
      <div className="project-right">
        <div className="project-card-port">
          <img src={portraitImage} alt="Portrait Project" className="project-image" />
          <h3>TripSpark: QR Based Bus Pass App</h3>
          <p className="project-description">
          TripSpark features a crafted user interface for its innovative mobile app, dedicated to ensuring safe school bus journeys. The app utilizes a QR code-based system, allowing bus faculty to generate unique QR codes for each student, confirming their presence upon boarding. Parents can enjoy real-time tracking of the school bus, receiving updates on its location and estimated arrival time for peace of mind. Additionally, the app features a convenient payment option for bus fare, streamlining and securing the entire transportation process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
