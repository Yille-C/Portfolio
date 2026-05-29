import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

// Import project assets
import FeasiFyImage from './assets/FeasiFyImage.png';
import FeasiFyHover from './assets/FeasiFyHover.gif';
import ReClaimImage from './assets/ReClaimImage.png';
import ReClaimHover from './assets/ReClaimHover.gif';
import BakunwaProject from './assets/BakunwaProject.gif';
import ARTAPreview from './assets/ARTAPreview.gif';
import EduManagePreview from './assets/EduManagePreview.gif';
import Saferoot from './assets/Saferoot.gif';

const projectsData = [
  {
    id: 'feasify',
    name: 'FeasiFy',
    intro: 'Analyze feasibility, track metrics and generate AI insights.',
    role: 'Lead Developer',
    image: FeasiFyImage,
    hover: FeasiFyHover,
    description: 'Feasify is a web-based project management platform tailored for collaborative feasibility studies. It streamlines team workflows by providing structured modules for documentation, financial analysis, risk assessment, and milestone tracking. The system enables real-time collaboration, automatic report generation, and role-based permissions, allowing organizations to evaluate projects efficiently.',
    techStack: {
      frontend: 'React, TypeScript, TailwindCSS',
      backend: 'Firebase(NoSQL), Node.js, Gemini API'
    },
    url: 'https://feasify.vercel.app'
  },
  {
    id: 'reclaim',
    name: 'ReClaim',
    intro: 'Browse, report, and reclaim lost and found items.',
    role: 'Assistant Developer/Quality Assurance',
    image: ReClaimImage,
    hover: ReClaimHover,
    description: 'ReClaim is a digital campus platform designed to recover and track lost-and-found items. It streamlines reporting, ownership verification, and item retrieval. Built to establish transparency within the university community, it features real-time notifications, category filtering, search mechanisms, and secure user profiles.',
    techStack: {
      frontend: 'React, JavaScript, CSS',
      backend: 'Node.js, Express, Supabase'
    },
    url: 'https://github.com/Yille-C/ReClaim'
  },
  {
    id: 'bakunawa',
    name: 'Rise of the Bakunawa',
    intro: 'A Table top game and Video game adaptation. Tribesmen vs. Bakunawa',
    role: 'Lead Developer',
    image: BakunwaProject,
    hover: BakunwaProject,
    description: 'Rise of the Bakunawa is a hybrid tabletop and video game adaptation celebrating Philippine mythology. Players control factions of tribesmen coordinating their tactical abilities to combat the mythical colossal dragon Bakunawa. The game features grid-based tactics, card management mechanics, and epic phase-based boss challenges.',
    techStack: {
      engine: 'Unity, C#',
      target: 'PC / Desktop Standalone, Android'
    },
    url: 'https://github.com/Yille-C/Rise-of-the-Bakunawa'
  },
  {
    id: 'arta',
    name: 'ARTA',
    intro: 'a digital platform designed to gather public feedback and assess satisfaction',
    role: 'Quality Assurance',
    image: ARTAPreview,
    hover: ARTAPreview,
    description: 'ARTA is a public sector digital compliance and feedback platform. It facilitates direct citizen engagement by collecting ratings, service satisfaction metrics, and qualitative complaints to generate transparent dashboard reports. The application aims to automate administrative compliance reviews and foster governmental accountability.',
    techStack: {
      frontend: 'React, JavaScript, TailwindCSS',
      backend: 'Node.js, Express, MongoDB'
    },
    url: 'https://github.com/Yille-C/ARTA-Feedback-Platform'
  },
  {
    id: 'edumanage',
    name: 'EduManage',
    intro: 'Streamline student management, track grades and attendance, generate insights with advanced analytics and predictions',
    role: 'UI/UX Designer/Quality Assurance',
    image: EduManagePreview,
    hover: EduManagePreview,
    description: 'EduManage is a comprehensive platform designed to streamline student management, track academic grades and attendance, and generate actionable insights with advanced analytics and predictions. As a UI/UX Designer and Quality Assurance specialist, I focused on crafting an intuitive, seamless user interface while ensuring the system\'s robustness, reliability, and ease of use through rigorous testing and quality assurance.',
    techStack: {
      frontend: 'HTML, TailwindCSS, TypeScript',
      backend: 'MySQL, Python'
    },
    url: 'https://github.com/Yille-C/EduManage'
  },
  {
    id: 'saferoot',
    name: 'Saferoot',
    intro: 'A client-based apparel platform themed around cultural beach and surfing lifestyle.',
    role: 'Lead Developer',
    image: Saferoot,
    hover: Saferoot,
    description: 'Saferoot is a client-based e-commerce and brand platform developed for a couple who launched their own apparel business. The project features a cultural beach and surfing theme, showcasing coastal heritage and surf culture. As the Lead Developer, I designed and built the custom web solution from the ground up, implementing a responsive user interface, smooth product discovery, and an optimized backend architecture to support their business growth.',
    techStack: {
      frontend: 'HTML, CSS, JavaScript',
      backend: 'PHP'
    },
    url: 'https://github.com/Yille-C/Saferoot'
  }
];

const projectItemVariants = {
  hiddenLeft: { opacity: 0, x: -120 },
  hiddenRight: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const textFadeVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

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

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Projects Section Header */}
        <div className="projects-header-wrapper">
          <motion.h2
            className="projects-section-title"
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {"PROJECTS".split("").map((char, index) => (
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

        {/* Large Passion Title */}
        <div className="projects-hero-wrapper">
          <motion.h1
            className="projects-hero-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            BUILD<br />CLEANLY,<br />TEST <br /> THOROUGHLY.<br />
          </motion.h1>
        </div>

        {/* Projects List Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const isEven = (index + 1) % 2 === 0;
            const isActive = activeProject && activeProject.id === project.id;

            return (
              <motion.div
                key={project.id}
                className={`project-item-reveal-wrapper ${isActive ? 'is-active' : ''}`}
                variants={projectItemVariants}
                initial={isEven ? "hiddenRight" : "hiddenLeft"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <motion.div
                  className={`project-item-wrapper ${isActive ? 'is-active' : ''}`}
                  layout
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Mockup Card Container */}
                  <motion.div
                    layout
                    className={`project-card-container ${isActive ? 'is-expanded' : ''} ${isActive && isEven ? 'is-right-bleed' : ''}`}
                    onClick={isActive ? undefined : () => setActiveProject(project)}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Left detailed content (only when expanded) */}
                    <AnimatePresence mode="popLayout">
                      {isActive && (
                        <motion.div
                          key="expanded-left"
                          className="expanded-content-left"
                          style={{ order: isEven ? 3 : 1 }}
                          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: isEven ? 30 : -30, transition: { duration: 0.2 } }}
                          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                        >
                          {/* Project Header */}
                          <div className="expanded-header">
                            <h2 className="expanded-title">
                              {project.name}
                              <motion.span 
                                className="expanded-strikeout" 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
                              />
                            </h2>
                            <div className="expanded-role">
                              <span className="expanded-role-label">Role</span>
                              <span className="expanded-role-value">{project.role}</span>
                            </div>
                          </div>

                          {/* Description Section */}
                          <div className="expanded-section">
                            <h3 className="expanded-section-title">Description</h3>
                            <div className="expanded-divider"></div>
                            <p className="expanded-description-text">{project.description}</p>
                          </div>

                          {/* Tech Stack Section */}
                          <div className="expanded-section">
                            <h3 className="expanded-section-title">Tech Stack</h3>
                            <div className="expanded-divider"></div>
                            <div className="expanded-tech-list">
                              {Object.entries(project.techStack).map(([key, value]) => (
                                <div className="expanded-tech-row" key={key}>
                                  <span className="expanded-tech-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                  <span className="expanded-tech-value">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Image Container (Always Rendered, with class & order toggled for animation) */}
                    <motion.div
                      layout
                      className={`project-device-image-container ${isActive ? 'is-expanded' : ''}`}
                      style={{ order: 2 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.img
                        layout
                        src={project.hover || project.image}
                        alt={`${project.name} preview`}
                        className={`project-image-el ${isActive ? 'is-expanded' : 'is-gif'}`}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </motion.div>

                    {/* Collapse Button (Close X) */}
                    <AnimatePresence mode="popLayout">
                      {isActive && (
                        <motion.button 
                          key="close-btn"
                          className="expanded-close-btn"
                          style={{ order: isEven ? 1 : 3 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveProject(null);
                          }}
                          aria-label="Collapse project details"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Info block below card (only when collapsed) */}
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        key="normal-info"
                        className="project-info-row"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="project-meta-left">
                          <span
                            className="project-bold-name"
                            onClick={() => setActiveProject(project)}
                          >
                            {project.name}
                          </span>
                          <span className="project-intro-text">
                            {project.intro}
                          </span>
                        </div>
                        <div className="project-meta-right">
                          <span className="project-role-label">
                            ROLE
                          </span>
                          <span className="project-role-value">
                            {project.role}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
