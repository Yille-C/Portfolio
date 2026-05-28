import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [showIntro, setShowIntro] = useState(true);

  // This removes the intro text after 3 seconds to reveal the main site
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-container">
      <AnimatePresence>
        {showIntro ? (
          /* Intro Animation Screen */
          <motion.div
            key="intro"
            className="intro-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Creating Systems for the Future World.
            </motion.h1>
          </motion.div>
        ) : (
          /* Main Landing Page */
          <motion.div 
            className="main-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="hero-content">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="main-title"
              >
                Developing Interfaces.<br/>Delivering Confidence in Quality
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="sub-title"
              >
                Front-end Developer & Quality Assurance
              </motion.p>
            </div>

            {/* Diagonal Marquee */}
            <div className="marquee-wrapper">
              <div className="marquee-container">
                <div className="marquee-content">
                  New Portfolio Site Coming Soon — New Portfolio Site Coming Soon — New Portfolio Site Coming Soon — New Portfolio Site Coming Soon — 
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <span>SCROLL</span>
              <div className="scroll-line"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;