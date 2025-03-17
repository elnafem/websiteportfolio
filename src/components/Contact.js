import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div className="container" initial={{opacity: 0}} animate={{opacity: 1}}>
      <h1>Contact 📬</h1>
      <p>Email: your-email@example.com</p>
      <p>LinkedIn: <a href="#">your-profile</a></p>
      <p>GitHub: github.com/yourusername</p>
    </motion.div>
  );
}
