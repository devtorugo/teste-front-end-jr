import React from "react";
import "./styles.css"; 

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="/Rectangle 250.png" alt="/Rectangle 108.png" className="banner-overlay-image" />
      <div className="dark-overlay"></div>
      <div className="banner-content">
        <h2 className="banner-title">Venha conhecer nossas </h2>
        <h2 className="banner-title">promoções</h2>
        <h3 className="banner-description">50% Off nos produtos</h3>
        <button className="banner-button">Ver produto</button>
      </div>
    </div>
  );
};

export default Banner;
