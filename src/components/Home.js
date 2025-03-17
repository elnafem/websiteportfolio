import React from 'react';
import { motion } from 'framer-motion';
import Headshot from '../Assets/HeadShot.png';
import DMCLogo from '../Assets/ITCommittee.png'; 
import AboutMe from '../Assets/AboutPicture.jpg';
import Headshot2 from '../Assets/HeadShot2.jpg';
import GroupPic from '../Assets/GroupPic.jpg';

export default function Home() {
  return (
    <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Profile Section */}
  <div className="profile-container">
  {/* Profile Image */}
  <img 
    src={Headshot}
    alt="Mohamed Profile"
    className="profile-image"
  />

  {/* Introduction Text */}
  <div className="intro-text">
    <h1>Hello, I'm Mohamed 👋</h1>
    <p>Welcome to my portfolio! I'm a developer passionate about creating clean, user-friendly web experiences.</p>
  </div>
  </div>

    {/* About Me Section */}
    <section className="about-section">
      <div className="about-image">
        <img
          src={AboutMe}
          alt="Mohamed Profile"
          className="about-headshot"
        />
      </div>
    <div className="about-content">
      <h2 className="text-xl md:text-2xl font-semibold mb-2">About Me 🧑‍💻</h2>
   <p className="text-gray-600 text-sm md:text-base">
    Hi, I'm Mohamed! I'm an Information Systems major with a minor in Computer Science at 
    <strong> Virginia Commonwealth University (VCU)</strong>, currently in my senior year. 
    I have a deep passion for technology, development, and coding, and I love creating 
    impactful digital experiences that enhance user interaction and efficiency.
  </p>
  <p>
    My academic background has given me a strong foundation in <strong>software development, database management, 
    cybersecurity, and IT infrastructure</strong>. Through hands-on projects and internships, I've developed 
    a keen ability to solve real-world problems using technology. I thrive in dynamic environments where I can 
    leverage my technical skills to build innovative solutions.
  </p>
  <ul className="mt-3 text-sm md:text-base space-y-2">
    <li>💻 <strong>React.js Developer</strong> – Experienced in building responsive and interactive web applications.</li>
    <li>🧑‍💻 <strong>JavaScript Enthusiast</strong> – Passionate about modern web technologies and performance optimization.</li>
    <li>🚀 <strong>Lifelong Learner</strong> – Always exploring new technologies and methodologies in software development.</li>
  </ul>
  </div>
</section>

      {/* Skills Section */}

      {/* Technical Skills Section */}
     
      <section className="skills-section2">
        <div className="skills-section_content">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Technical Skills 🛠️</h2>
        <ul className="text-gray-600 text-sm md:text-base space-y-2">
          <li>⚡ React.js & Next.js</li>
          <li>⚡ JavaScript, TypeScript</li>
          <li>⚡ HTML, CSS, Tailwind CSS</li>
          <li>⚡ Node.js, Express.js</li>
          <li>⚡ MongoDB, PostgreSQL</li>
          <li>⚡ Git & GitHub</li>
          <li>⚡ REST APIs & GraphQL</li>
        </ul>
        </div>

        <div className="skills-section_image">
          <img
            src={Headshot2}
            alt="Mohamed Profile"
            className="about-headshot"
        />
        </div>
      </section>

      {/* Non-Technical Skills Section */}
      <section className="skills-section">
      <div className="skills-section2_image">
          <img
            src={GroupPic}
            alt="Mohamed Profile"
            className="about-headshot"
        />
        </div>
        <div className="skills-section_content">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Non-Technical Skills 🌟</h2>
        <ul className="text-gray-600 text-sm md:text-base space-y-2">
          <li>✅ Problem Solving</li>
          <li>✅ Communication & Teamwork</li>
          <li>✅ Leadership & Mentoring</li>
          <li>✅ Public Speaking</li>
          <li>✅ Time Management & Organization</li>
        </ul>
        </div>
      </section>

       {/* Logo Image */}
       <div className="logo">
      <img 
       src={DMCLogo}
       alt="DMC Logo"
      />
      </div>
    </motion.div>
  );
}
