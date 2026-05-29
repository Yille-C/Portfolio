import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Import project assets
import FeasiFyImage from './assets/FeasiFyImage.png';
import FeasiFyHover from './assets/FeasiFyHover.gif';
import ReClaimImage from './assets/ReClaimImage.png';
import ReClaimHover from './assets/ReClaimHover.gif';
import BakunwaProject from './assets/BakunwaProject.gif';
import ARTAPreview from './assets/ARTAPreview.gif';

const projectsData = [
  {
    id: 'feasify',
    name: 'FeasiFy',
    intro: 'Analyze feasibility, track metrics and generate AI insights.',
    role: 'Lead Developer',
    image: FeasiFyImage,
    hover: FeasiFyHover
  },
  {
    id: 'reclaim',
    name: 'ReClaim',
    intro: 'Browse, report, and reclaim lost and found items.',
    role: 'Assistant Developer/Quality Assurance',
    image: ReClaimImage,
    hover: ReClaimHover
  },
  {
    id: 'bakunawa',
    name: 'Rise of the Bakunawa',
    intro: 'A Table top game and Video game adaptation. Tribesmen vs. Bakunawa',
    role: 'Lead Developer',
    image: BakunwaProject,
    hover: BakunwaProject
  },
  {
    id: 'arta',
    name: 'ARTA',
    intro: 'a digital platform designed to gather public feedback and assess satisfaction',
    role: 'Quality Assurance',
    image: ARTAPreview,
    hover: ARTAPreview
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Projects Section Header */}
        <div className="projects-header-wrapper">
          <motion.div
            className="projects-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="projects-section-title">PROJECTS</h2>
          </motion.div>
        </div>

        {/* Large Passion Title */}
        <div className="projects-hero-wrapper">
          <motion.h1
            className="projects-hero-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            BUILT<br />WITH<br />PASSION,
          </motion.h1>
        </div>

        {/* Projects List Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                className="project-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              >
                {/* Mockup Card Container */}
                <div className="project-card">
                  <div className="device-screen-wrapper">
                    <img
                      src={project.hover || project.image}
                      alt={`${project.name} preview`}
                      className="project-image is-gif"
                    />
                  </div>
                </div>

                {/* Project Info Block */}
                <div className="project-info-row">
                  <div className="project-meta-left">
                    <span className="project-bold-name">{project.name}</span>
                    <span className="project-intro-text">{project.intro}</span>
                  </div>
                  <div className="project-meta-right">
                    <span className="project-role-label">ROLE</span>
                    <span className="project-role-value">{project.role}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
