import React from 'react';
import './styles.css'; // Estilo CSS para arredondar os cards e definir a imagem de fundo

interface CardProps {
  side: 'left' | 'right'; 
}

const Card: React.FC<CardProps> = ({ side }) => {
  return (
    <div className={`card2 ${side}`}>
      <div className="content">
        <h2>Parceiros</h2>
        <p>Lorem ipsum dolor sit amet,</p>
        <p> consectetur adipiscing elit.</p>
        <button className='buttoncard'>CONFIRA</button>
      </div>
    </div>
  );
};

const CardProdutos: React.FC = () => {
  return (
    <div className="card-produtos">
      <div className="content">
        <h2>Produto</h2>
        <p>Lorem ipsum dolor sit amet,</p>
        <p> consectetur adipiscing elit.</p>
        <button className='buttoncard'>CONFIRA</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="container">
      </div>
      <div className="related-products-section">
        <h2 className="related-products-title">Produtos relacionados</h2>
        <div className="separator">
          <hr className="separator-line" />
          <span className="separator-text">Ver todos</span>
          <hr className="separator-line" />
        </div>
        <div className="related-products-container">
          <CardProdutos />
          <CardProdutos />
        </div>
      </div>
    </>
  );
};

export default App;
