import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import cpLogo from './assets/logo.png';
import './Contact.css';

const titleContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.4, ease: "easeInOut" }
  }
};

const typewriterContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const typewriterLetter = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.01 }
  }
};

const Contact = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  // Social Button Motion Variants
  const socialVariants = {
    hidden: { scale: 0, x: 0, y: 0, opacity: 0 },
    emailVisible: {
      scale: 1,
      x: -90,
      y: 90,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    },
    linkedinVisible: {
      scale: 1,
      x: 0,
      y: 125,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15, delay: 0.05 }
    },
    githubVisible: {
      scale: 1,
      x: 90,
      y: 90,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }
    }
  };

  return (
    <section className="contact-section" ref={ref} id="contact">
      <div className="contact-container">

        {/* Main Grid Layout */}
        <div className="contact-grid">

          {/* Left Column: Heading and Title */}
          <div className="contact-col-left">
            <div className="contact-header">
              <motion.h2 
                className="contact-section-title"
                variants={titleContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {"CONTACT".split("").map((char, index) => (
                  <motion.span 
                    key={index} 
                    variants={letterVariants} 
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span 
                  className="strikeout-line" 
                  variants={lineVariants} 
                  style={{ originX: 0 }} 
                />
              </motion.h2>
            </div>

            <motion.h1
              className="contact-greeting"
              variants={typewriterContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {"Lets have a chat".split("").map((char, index) => (
                <motion.span key={index} variants={typewriterLetter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="contact-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Whether you need a developer or a QA, I'm here to help. Reach out and let's discuss how we can work together.
            </motion.p>
          </div>

          {/* Right Column: Interactive Fanning Button Group */}
          <div className="contact-col-right">
            <div
              className={`contact-btn-wrapper ${isHovered ? 'is-expanded' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer Ring 2 */}
              <div className={`contact-ring ring-outer ${isHovered ? 'active' : ''}`} />
              {/* Outer Ring 1 */}
              <div className={`contact-ring ring-inner ${isHovered ? 'active' : ''}`} />

              {/* Main Circular Button */}
              <button className="contact-main-btn">
                <span>Contact</span>
              </button>

              {/* Social Icon 1: Email (Bottom-Left) */}
              <motion.a
                href="mailto:carillemperan@gmail.com"
                className="contact-social-btn"
                variants={socialVariants}
                animate={isHovered ? "emailVisible" : "hidden"}
                whileHover={{ scale: 1.15 }}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              </motion.a>

              {/* Social Icon 2: LinkedIn (Bottom-Center) */}
              <motion.a
                href="https://www.linkedin.com/in/carille-peran-b41475412/"
                className="contact-social-btn"
                variants={socialVariants}
                animate={isHovered ? "linkedinVisible" : "hidden"}
                whileHover={{ scale: 1.15 }}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                </svg>
              </motion.a>

              {/* Social Icon 3: GitHub (Bottom-Right) */}
              <motion.a
                href="https://github.com/Yille-C"
                className="contact-social-btn"
                variants={socialVariants}
                animate={isHovered ? "githubVisible" : "hidden"}
                whileHover={{ scale: 1.15 }}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            </div>
          </div>

        </div>

        {/* Divider line that animates from the center to left/right */}
        <motion.div
          className="footer-divider-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ originX: 0.5 }}
        />

        {/* Footer Section matching the 3rd Image design */}
        <footer className="contact-footer">
          <div className="footer-brand-section">
            <img src={cpLogo} alt="CP Logo" className="footer-logo-img" />
            <h4 className="footer-brand-fullname">Carille Peran</h4>
          </div>

          <div className="footer-meta-section">
            <p className="footer-copyright">
              &copy; CARILLE PERAN 2026. ALL RIGHTS RESERVED. LOCATION: PHILIPPINES
            </p>
            <p className="footer-disclaimer">
              This site showcases my personal projects and professional work. Content may not be used without permission.
            </p>
          </div>
        </footer>

      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
