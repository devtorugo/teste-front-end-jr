import React from 'react';
import './styles.css';

const Navegacao = () => {
  return (
    <div className="navigation-section">
      <h2 className="navigation-title">Navegue por marcas</h2>
      <div className="brand-circles">
        <div className="brand-circle">
          <img src="/logo.png" alt="Marca 1" />
        </div>
        <div className="brand-circle">
          <img src="/logo.png" alt="Marca 2" />
        </div>
        <div className="brand-circle">
          <img src="/logo.png" alt="Marca 3" />
        </div>
        <div className="brand-circle">
          <img src="/logo.png" alt="Marca 4" />
        </div>
        <div className="brand-circle">
          <img src="/logo.png" alt="Marca 5" />
        </div>
      </div>
    </div>
  );
};

export default Navegacao;
