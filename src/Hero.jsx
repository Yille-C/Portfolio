import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cpLogo from './assets/logo.png';
import './Hero.css';

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  hidden: {}
};

const itemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1]
    }
  },
  hidden: {
    y: 30,
    opacity: 0
  }
};

const introContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const introWordVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Hero = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isLightBg, setIsLightBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('index');

  // Removes the intro text after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // ScrollSpy to track active section
  useEffect(() => {
    if (showIntro) return;

    const handleActiveSectionScroll = () => {
      const indexEl = document.querySelector('.hero-container');
      const aboutEl = document.querySelector('.about-section');
      const projectsEl = document.querySelector('.projects-section');
      const contactEl = document.querySelector('.contact-section');

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Bottom of page check
      if ((window.innerHeight + scrollY) >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      const sections = [
        { id: 'index', el: indexEl },
        { id: 'about', el: aboutEl },
        { id: 'projects', el: projectsEl },
        { id: 'contact', el: contactEl }
      ];

      let currentSection = 'index';
      // Find which section is currently active
      for (const section of sections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= viewportHeight * 0.4 && rect.bottom >= viewportHeight * 0.3) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleActiveSectionScroll, { passive: true });
    handleActiveSectionScroll();

    return () => window.removeEventListener('scroll', handleActiveSectionScroll);
  }, [showIntro]);

  // Logo click refresh handler
  const handleLogoClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setIsMenuOpen(false);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll listener to detect when viewport is over light background sections
  useEffect(() => {
    if (showIntro) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = document.querySelector('.hero-container');
      const clients = document.querySelector('.clients-section');

      // 1. If we are in the Hero section, background is always dark
      if (hero && scrollY < hero.offsetHeight) {
        setIsLightBg(false);
        return;
      }

      // 2. If we are in the Clients section, check the top/bottom split
      if (clients) {
        const clientsRect = clients.getBoundingClientRect();
        if (clientsRect.top <= 50 && clientsRect.bottom >= 50) {
          const relativeY = 50 - clientsRect.top;
          const isOverDarkHalf = relativeY < clientsRect.height / 2;
          setIsLightBg(!isOverDarkHalf);
          return;
        }
      }

      // 3. Otherwise, check the actual computed background color of the transitioning wrapper
      const wrapper = document.querySelector('.scroll-bg-wrapper');
      if (wrapper) {
        const computedBg = window.getComputedStyle(wrapper).backgroundColor;
        const match = computedBg.match(/\d+/g);
        if (match && match.length >= 3) {
          const r = parseInt(match[0]);
          const g = parseInt(match[1]);
          const b = parseInt(match[2]);
          // Compute perceived luminance/brightness
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          setIsLightBg(brightness >= 128); // Light theme if brightness >= 50%
          return;
        }
      }

      setIsLightBg(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntro]);

  const introText = "Creating Systems for the Future World.";
  const introWords = introText.split(" ");

  return (
    <div className="hero-container" id="index">
      <AnimatePresence>
        {showIntro ? (
          /* Intro Animation Screen */
          <motion.div
            key="intro"
            className="intro-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              filter: "blur(16px)",
              transition: { duration: 0.8, ease: "easeInOut" } 
            }}
          >
            <motion.h1 
              variants={introContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {introWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={introWordVariants}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              ))}
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
              <div 
                className="logo" 
                onClick={handleLogoClick} 
                style={{ 
                  filter: isMenuOpen ? 'none' : (isLightBg ? 'invert(1)' : 'none'), 
                  transition: 'filter 0.3s ease' 
                }}
              >
                <img src={cpLogo} alt="CP Logo" className="logo-img" />
              </div>
              <div className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top Line */}
                  <motion.path
                    stroke={isMenuOpen ? "white" : (isLightBg ? "black" : "white")}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    animate={isMenuOpen ? { d: "M6 2 L 26 18" } : { d: "M16 4 L 30 4" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  {/* Middle Line */}
                  <motion.path
                    stroke={isMenuOpen ? "white" : (isLightBg ? "black" : "white")}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    d="M8 10 L 30 10"
                  />
                  {/* Bottom Line */}
                  <motion.path
                    stroke={isMenuOpen ? "white" : (isLightBg ? "black" : "white")}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    animate={isMenuOpen ? { d: "M26 2 L 6 18" } : { d: "M2 16 L 30 16" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
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

            {/* Menu Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="menu-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="menu-overlay-content">
                    <nav className="menu-nav">
                      <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.li variants={itemVariants}>
                          <button 
                            className={`menu-link-btn ${activeSection === 'index' ? 'active' : ''}`}
                            onClick={() => scrollToSection('index')}
                          >
                            INDEX
                          </button>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <button 
                            className={`menu-link-btn ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={() => scrollToSection('about')}
                          >
                            ABOUT
                          </button>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <button 
                            className={`menu-link-btn ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={() => scrollToSection('projects')}
                          >
                            PROJECT
                          </button>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <button 
                            className={`menu-link-btn ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={() => scrollToSection('contact')}
                          >
                            CONTACT
                          </button>
                        </motion.li>
                      </motion.ul>
                    </nav>
                  </div>

                  <div className="menu-overlay-footer">
                    <div className="menu-socials">
                      <a href="https://www.facebook.com/Yillllee/" target="_blank" rel="noopener noreferrer">Facebook</a>
                      <a href="https://www.instagram.com/yillllee/" target="_blank" rel="noopener noreferrer">Instagram</a>
                      <a href="https://www.linkedin.com/in/carille-peran-b41475412/" target="_blank" rel="noopener noreferrer">linkedin</a>
                      <a href="https://github.com/Yille-C" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;