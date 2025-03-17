import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div className="container" initial={{opacity: 0}} animate={{opacity: 1}}>
      <h1>Contact 📬</h1>
      <p>Email: your-elnafem@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/mohamed-elnafe-364892215/">https://www.linkedin.com/in/mohamed-elnafe-364892215/</a></p>
      <p>GitHub: github.com/elnafem</p>
    </motion.div>
  );
}
