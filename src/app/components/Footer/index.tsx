import React from 'react';
import './styles.css'; // 

const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="image-container">
        <img src="institucional.png" alt="Imagem 1" className="footer-image" />
        <img src="info.png" alt="Imagem 2" className="footer-image" />
        <img src="pgt.png" alt="Imagem 3" className="footer-image" />
        <img src="news.png" alt="Imagem 4" className="footer-image" />
      </div>
      <img src="base_inferior.png" alt="" />
    </footer>
  );
};

export default Footer;
