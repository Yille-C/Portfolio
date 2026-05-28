import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cpLogo from './assets/logo.png';
import './Hero.css';

const Hero = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Removes the intro text after 3 seconds
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
            {/* Header Navigation */}
            <header className="hero-header">
              <div className="logo">
                <img src={cpLogo} alt="CP Logo" className="logo-img" />
              </div>
              <div className="menu-btn">
                <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M8 10H30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M2 16H30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
            </header>

            {/* Red Circle Background */}
            <div className="red-circle-container">
              <svg 
                viewBox="0 0 1000 400" 
                className="red-circle-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outermost Concentric Ring 3 */}
                <motion.circle 
                  cx="500" 
                  cy="-300" 
                  r="510" 
                  fill="none" 
                  stroke="#FF0000" 
                  strokeWidth="2.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
                  style={{ transformOrigin: "500px -300px" }}
                />
                {/* Concentric Ring 2 */}
                <motion.circle 
                  cx="500" 
                  cy="-300" 
                  r="490" 
                  fill="none" 
                  stroke="#FF0000" 
                  strokeWidth="2.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
                  style={{ transformOrigin: "500px -300px" }}
                />
                {/* Concentric Ring 1 */}
                <motion.circle 
                  cx="500" 
                  cy="-300" 
                  r="460" 
                  fill="none" 
                  stroke="#FF0000" 
                  strokeWidth="2.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.4, delay: 0.1, ease: "easeOut" }}
                  style={{ transformOrigin: "500px -300px" }}
                />
                {/* Solid Red Circle */}
                <motion.circle 
                  cx="500" 
                  cy="-300" 
                  r="400" 
                  fill="#FF0000"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ transformOrigin: "500px -300px" }}
                />
              </svg>
            </div>

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

            {/* Scroll Indicator */}
            <motion.div 
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <span>SCROLL DOWN</span>
              <div className="scroll-line"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;