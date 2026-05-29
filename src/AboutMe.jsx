import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AboutMe.css';
import formalImg from './assets/formal.jpg';
import resumePdf from './assets/CarillePeran_Resume.pdf';

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

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReachOutClick = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const moreButtonRef = useRef(null);
  const [coordsMore, setCoordsMore] = useState({ x: 0, y: 0 });
  const [isHoveredMore, setIsHoveredMore] = useState(false);

  const handleMouseMoveMore = (e) => {
    if (!moreButtonRef.current) return;
    const rect = moreButtonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const maxTranslate = 20;
    const percentX = x / (rect.width / 2);
    const percentY = y / (rect.height / 2);

    setCoordsMore({
      x: percentX * maxTranslate,
      y: percentY * maxTranslate
    });
  };

  const handleMouseEnterMore = () => {
    setIsHoveredMore(true);
  };

  const handleMouseLeaveMore = () => {
    setIsHoveredMore(false);
    setCoordsMore({ x: 0, y: 0 });
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section Title with Red Strike-through */}
        <div className="about-header">
          <motion.h2 
            className="about-section-title"
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {"ABOUT ME".split("").map((char, index) => (
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

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Greeting and Call to Action */}
          <div className="about-col-left">
            <motion.h1
              className="about-greeting"
              variants={typewriterContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {"Hello, I'm Carille".split("").map((char, index) => (
                <motion.span key={index} variants={typewriterLetter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* The custom red line under greeting */}
            <motion.div
              className="about-cyan-line"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              style={{ originX: 0 }}
            />

            {/* Buttons Flex Row */}
            <div className="about-buttons-row">
              {/* Reach Out Pill Button (Red outlined style matching resume button) */}
              <motion.button
                onClick={handleReachOutClick}
                className="reach-out-btn"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Reach Out <span className="arrow">&rarr;</span>
              </motion.button>

              {/* Download Resume Pill Button */}
              <motion.a
                href={resumePdf}
                download="CarillePeran_Resume.pdf"
                className="resume-btn"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                Download Resume <span className="arrow">&darr;</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Biography details and links */}
          <div className="about-col-right">
            <div className="about-bio-content">
              <motion.p
                className="about-bio-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                I’m a 22-year-old Front-end Developer and Quality Assurance. I focus on building clean, modern websites while ensuring smooth performance and great user experience.
              </motion.p>
              <motion.blockquote
                className="about-quote"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                "Building seamless interfaces, ensuring flawless experiences.”
              </motion.blockquote>
            </div>

            {/* Know More button centered below the quote */}
            <motion.div
              className="about-link-container-centered"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                ref={moreButtonRef}
                className="magnetic-btn-wrapper"
                onMouseMove={handleMouseMoveMore}
                onMouseEnter={handleMouseEnterMore}
                onMouseLeave={handleMouseLeaveMore}
              >
                {/* Outer floating outline ring */}
                <div
                  className={`magnetic-btn-outline ${isHoveredMore ? 'active' : ''}`}
                  style={{
                    transform: `translate(${coordsMore.x * 1.4}px, ${coordsMore.y * 1.4}px)`,
                    transition: isHoveredMore ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                />

                {/* Inner solid button fill */}
                <button
                  className="magnetic-btn-fill"
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    transform: `translate(${coordsMore.x * 0.8}px, ${coordsMore.y * 0.8}px)`,
                    transition: isHoveredMore ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                >
                  <span
                    className="magnetic-btn-text"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      lineHeight: '1.25',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      transform: `translate(${coordsMore.x * 0.3}px, ${coordsMore.y * 0.3}px)`,
                      transition: isHoveredMore ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                  >
                    <span>Know more</span>
                    <span>about me</span>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop and Content */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                &times;
              </button>

              <div className="modal-inner">
                <motion.div 
                  className="modal-profile-container"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  <img src={formalImg} alt="Carille Peran" className="modal-profile-img" />
                </motion.div>

                <motion.h2 
                  className="modal-title"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  I'm Carille Peran, nice to meet you!
                </motion.h2>

                <motion.p 
                  className="modal-bio"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                >
                  I'm a 22-year-old Front-End developer and Quality Assurance enthusiast who loves to create clean, responsive, intuitive web applications. I focuses on building modern, beautiful, and performant websites and web applications across different devices and platforms. I strive to balance form and function to build user interfaces that are fast, reliable, and easy to use.
                </motion.p>

                <motion.div 
                  className="modal-skills-section"
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="modal-skills-title">Skills</h3>
                  <ul className="modal-skills-list">
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      Java
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65 }}
                    >
                      C#
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      HTML
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.75 }}
                    >
                      Javascript
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      CSS
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.85 }}
                    >
                      React
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      manual/automated testing
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMe;
