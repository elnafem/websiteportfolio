import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Project One', description: 'Description for Project One' },
  { title: 'Project Two', description: 'Description of Project Two' },
  { title: 'Another Project', description: 'Description here' },
];

export default function Projects() {
  return (
    <motion.div className="container" initial={{y: '50vh'}} animate={{y:0}}>
      <h1>My Projects 💻</h1>
      {projects.map((project, index) => (
        <div key={index} style={{marginBottom:'20px'}}>
          <h3>{project.title || `Project ${index + 1}`}</h3>
          <p>{project.description || "Brief description of this awesome project."}</p>
        </div>
      ))}
    </motion.div>
  );
}
