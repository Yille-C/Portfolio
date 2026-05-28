import React, { useRef, useState } from 'react';
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

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Section Title with Red Strike-through */}
        <div className="about-header">
          <h2 className="about-section-title">ABOUT ME</h2>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Left Column: Greeting and Call to Action */}
          <div className="about-col-left">
            <h1 className="about-greeting">Hello, I'm Carille</h1>

            {/* The custom cyan mint line under greeting */}
            <div className="about-cyan-line"></div>

            {/* Interactive Magnetic Button Container */}
            <div
              ref={buttonRef}
              className="magnetic-btn-wrapper"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
            </div>
          </div>

          {/* Right Column: Biography details and links */}
          <div className="about-col-right">
            <div className="about-bio-content">
              <p className="about-bio-text">
                I’m a 22-year-old Front-end Developer and Quality Assurance. I focus on building clean, modern websites while ensuring smooth performance and great user experience.
              </p>
              <blockquote className="about-quote">
                "Building seamless interfaces, ensuring flawless experiences.”
              </blockquote>
            </div>

            {/* Know More link at the bottom right */}
            <div className="about-link-container">
              <a href="#more" className="about-more-link">
                Know more about me <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
