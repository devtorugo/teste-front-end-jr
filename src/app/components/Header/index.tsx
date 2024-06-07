import React from 'react';
import './styles.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="top-info">
        <div className="info-item">
          <img src="/ShieldCheck.png" alt="Compra 100% segura" className="info-icon" />
          <span>Compra 100% segura</span>
        </div>
        <div className="info-item">
          <img src="/Truck.png" alt="Frete grátis acima de R$ 200" className="info-icon" />
          <span>Frete grátis acima de R$ 200</span>
        </div>
        <div className="info-item">
          <img src="/CreditCard.png" alt="Parcele suas compras" className="info-icon" />
          <span>Parcele suas compras</span>
        </div>
      </div>
      <div className="header-top">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="O que você está buscando?" />
          <button className="search-button">
            <img src="/MagnifyingGlass.png" alt="Search" />
          </button>
        </div>
        <div className="icons">
          <img src="/Group.png" alt="Icon 1" className="icon" />
          <img src="/Heart.png" alt="Icon 2" className="icon" />
          <img src="/UserCircle.png" alt="Icon 3" className="icon" />
          <img src="/ShoppingCart.png" alt="Icon 4" className="icon" />
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li className="nav-item">TODAS AS CATEGORIAS</li>
          <li className="nav-item">SUPERMERCADO</li>
          <li className="nav-item">LIVROS</li>
          <li className="nav-item">MODA</li>
          <li className="nav-item">LANÇAMENTOS</li>
          <li className="offer">OFERTAS DO DIA</li>
          <li className="subscription">
            <img src="/CrownSimple.png" alt="Subscription" className="subscription-icon" />
            ASSINATURA
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
