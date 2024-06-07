import React from 'react';
import './styles.css'; 

const Produtos = () => {
  return (
    <div className="produtos-container">
      <h2>Produtos relacionados</h2>
      <div className="categorias">
        <div className="categoria">Celular</div>
        <div className="categoria">Acessórios</div>
        <div className="categoria">Tablets</div>
        <div className="categoria">Notebooks</div>
        <div className="categoria">TVs</div>
        <div className="categoria">Ver todos</div>
      </div>
      <div className="produtos-carousel">
        <div className="card">
          <img src="./iphone.png" alt="Celular" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p className="preco">R$ 999,00</p>
          <p className="preco-desconto">R$ 799,00</p>
          <div className="frete-parcelas">
            <p className="parcelas">2x de R$ 49,95 sem juros</p>
            <p className="frete-gratis">Frete Grátis</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="card">
          <img src="./iphone.png" alt="Acessórios" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p className="preco">R$ 199,00</p>
          <p className="preco-desconto">R$ 159,00</p>
          <div className="frete-parcelas">
            <p className="parcelas">2x de R$ 49,95 sem juros</p>
            <p className="frete-gratis">Frete Grátis</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="card">
          <img src="./iphone.png" alt="Tablets" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className="preco">R$ 1499,00</p>
          <p className="preco-desconto">R$ 1299,00</p>
          <div className="frete-parcelas">
            <p className="parcelas">2x de R$ 49,95 sem juros</p>
            <p className="frete-gratis">Frete Grátis</p>
          </div>
          <button>Comprar</button>
        </div>
        <div className="card">
          <img src="./iphone.png" alt="Notebooks" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className="preco">R$ 2999,00</p>
          <p className="preco-desconto">R$ 2499,00</p>
          <div className="frete-parcelas">
            <p className="parcelas">2x de R$ 49,95 sem juros</p>
            <p className="frete-gratis">Frete Grátis</p>
          </div>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
