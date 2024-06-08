'use client'
import React, { useState, useEffect } from 'react';
import './styles.css';

const Produtos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [quantidade, setQuantidade] = useState(1);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (index) => {
    setSelectedProductIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const incrementQuantity = () => {
    setQuantidade(quantidade + 1);
  };

  const decrementQuantity = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

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
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.photo} alt={product.productName} />
            <p>{product.descriptionShort}</p>
            <p className="preco">R$ {product.price}</p>
            <button onClick={() => openModal(index)}>Comprar</button>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={products[selectedProductIndex].photo} alt={products[selectedProductIndex].productName} />
            <div className="modal-info">
              <h3>{products[selectedProductIndex].productName}</h3>
              <p className="modal-price">R$ {products[selectedProductIndex].price}</p>
              <div className="quantidade-buttons">
                <button onClick={decrementQuantity}>-</button>
                <span>{quantidade}</span>
                <button onClick={incrementQuantity}>+</button>
              </div>
              <button className="buy-button">Comprar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Produtos;
