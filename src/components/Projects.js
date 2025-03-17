import React from 'react';
import { motion } from 'framer-motion';
import Photo1 from '../Assets/dmcwebsite.png';
import Photo2 from '../Assets/UnitedToHeal.jpeg';

const projects = [
  {
    title: 'Develop Men of Color (DMC) Website Development',
    image: Photo1,
    description: 'Designed and developed a responsive, user-friendly website for the student organization Develop Men of Color (DMC), focusing on enhancing online presence and community engagement. Utilizing React.js for dynamic frontend interaction and Node.js for scalable backend support, the project involved creating intuitive navigation, event registration features, and interactive content modules. Integrated modern UI/UX principles and optimized the platform for mobile devices, ensuring accessibility and improved user experience. Successfully coordinated with stakeholders to align the site structure with organizational objectives, boosting digital engagement and event participation.'
  },
  {
    title: 'United to Heal App Development',
    image: Photo2,
    description: 'Developed a streamlined inventory-tracking application for United2Heal, an organization dedicated to distributing medical supplies to developing countries. Built with React.js for the frontend and Node.js with MongoDB for backend services, the app efficiently manages real-time tracking of medical supplies, shipment logistics, and destination records. Integrated advanced inventory analytics and reporting tools, enhancing transparency and operational efficiency. Optimized the application for cross-platform use, ensuring seamless accessibility for volunteers and administrators, ultimately improving supply-chain accuracy and maximizing resource allocation to communities in need.'
  },
];

export default function Projects() {
  return (
    <motion.div className="container" initial={{ y: '50vh' }} animate={{ y: 0 }}>
      <h1>My Projects 💻</h1>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h3>{project.title || `Project ${index + 1}`}</h3>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: 'auto',
                height: '350px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              }}
            />
          )}
          <p style={{ maxWidth: '800px', margin: '10px auto' }}>
            {project.description || "Brief description of this awesome project."}
          </p>
        </div>
      ))}
    </motion.div>
  );
}