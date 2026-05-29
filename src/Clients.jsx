import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

const Clients = () => {
  const ribbonText = "CARILLE'S PORTFOLIO SITE - ".repeat(12);

  return (
    <section className="clients-section">
      {/* Criss-crossing Animated Ribbons Container */}
      <div className="ribbons-wrapper">
        {/* Ribbon 1: Black Background, White Text, Angled Downward */}
        <motion.div 
          className="ribbon ribbon-dark"
          initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-50%", rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%", rotate: -4 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="ribbon-track track-left">
            <span>{ribbonText}</span>
            <span>{ribbonText}</span>
          </div>
        </motion.div>

        {/* Ribbon 2: White Background, Black Text, Angled Upward */}
        <motion.div 
          className="ribbon ribbon-light"
          initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-50%", rotate: 3.5 }}
          whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%", rotate: 3.5 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="ribbon-track track-right">
            <span>{ribbonText}</span>
            <span>{ribbonText}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
