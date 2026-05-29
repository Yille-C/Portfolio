import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  const buttonRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    // Calculate distance from center of the button
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Limits the translation reach
    const maxTranslate = 20;

    // Scale coordinates based on mouse position relative to boundary
    const percentX = x / (rect.width / 2);
    const percentY = y / (rect.height / 2);

    setCoords({
      x: percentX * maxTranslate,
      y: percentY * maxTranslate
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const handleReachOutClick = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section Title with Red Strike-through */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="about-section-title">ABOUT ME</h2>
        </motion.div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Greeting and Call to Action */}
          <div className="about-col-left">
            <motion.h1
              className="about-greeting"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hello, I'm Carille
            </motion.h1>

            {/* The custom cyan mint line under greeting */}
            <motion.div
              className="about-cyan-line"
              initial={{ width: 0 }}
              whileInView={{ width: 130 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />

            {/* Interactive Magnetic Button Container */}
            <motion.div
              ref={buttonRef}
              className="magnetic-btn-wrapper"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {/* Outer floating outline ring */}
              <div
                className={`magnetic-btn-outline ${isHovered ? 'active' : ''}`}
                style={{
                  transform: `translate(${coords.x * 1.4}px, ${coords.y * 1.4}px)`,
                  transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              />

              {/* Inner solid button fill */}
              <button
                className="magnetic-btn-fill"
                onClick={handleReachOutClick}
                style={{
                  transform: `translate(${coords.x * 0.8}px, ${coords.y * 0.8}px)`,
                  transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
              >
                <span
                  className="magnetic-btn-text"
                  style={{
                    display: 'inline-block',
                    transform: `translate(${coords.x * 0.3}px, ${coords.y * 0.3}px)`,
                    transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                >
                  Reach Out &rarr;
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Biography details and links */}
          <div className="about-col-right">
            <div className="about-bio-content">
              <motion.p
                className="about-bio-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                I’m a 22-year-old Front-end Developer and Quality Assurance. I focus on building clean, modern websites while ensuring smooth performance and great user experience.
              </motion.p>
              <motion.blockquote
                className="about-quote"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                "Building seamless interfaces, ensuring flawless experiences.”
              </motion.blockquote>
            </div>

            {/* Know More link at the bottom right */}
            <motion.div
              className="about-link-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <a href="#more" className="about-more-link">
                Know more about me <span className="arrow">&rarr;</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
