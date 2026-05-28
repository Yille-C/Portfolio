import React from 'react';
import './Clients.css';

const Clients = () => {
  const ribbonText = "CARILLE'S PORTFOLIO SITE - ".repeat(12);

  return (
    <section className="clients-section">
      {/* Criss-crossing Animated Ribbons Container */}
      <div className="ribbons-wrapper">
        {/* Ribbon 1: Black Background, White Text, Angled Downward */}
        <div className="ribbon ribbon-dark">
          <div className="ribbon-track track-left">
            <span>{ribbonText}</span>
            <span>{ribbonText}</span>
          </div>
        </div>

        {/* Ribbon 2: White Background, Black Text, Angled Upward */}
        <div className="ribbon ribbon-light">
          <div className="ribbon-track track-right">
            <span>{ribbonText}</span>
            <span>{ribbonText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
