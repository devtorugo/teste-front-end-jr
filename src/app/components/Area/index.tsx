import React from "react";
import "./styles.css"; // Importando o arquivo de estilos

const Area = () => {
  return (
    <div className="area-container">
      {/* Quadrado 1 */}
      <div className="square-container">
        <div className="monitor">
          <img src="monitor.png" alt="Tecnologia" className="square-image" />
        </div>
        <p className="square-rosa">Tecnologia</p>
      </div>

      {/* Quadrado 2 */}
      <div className="square-container">
        <div className="square">
          <img src="supermercados 1.png" alt="Supermercado" className="square-image" />
        </div>
        <p className="square-label">Supermercado</p>
      </div>

      {/* Quadrado 3 */}
      <div className="square-container">
        <div className="square">
          <img src="whiskey.png" alt="Bebidas" className="square-image" />
        </div>
        <p className="square-label">Bebidas</p>
      </div>

      {/* Quadrado 4 */}
      <div className="square-container">
        <div className="square">
          <img src="ferramentas 1.png" alt="Ferramentas" className="square-image" />
        </div>
        <p className="square-label">Ferramentas</p>
      </div>

      {/* Quadrado 5 */}
      <div className="square-container">
        <div className="square">
          <img src="cuidados-de-saude 1.png" alt="Saúde" className="square-image" />
        </div>
        <p className="square-label">Saúde</p>
      </div>

      {/* Quadrado 6 */}
      <div className="square-container">
        <div className="square">
          <img src="corrida 1.png" alt="Esportes e Fitness" className="square-image" />
        </div>
        <p className="square-label">Esportes e Fitness</p>
      </div>

      {/* Quadrado 7 */}
      <div className="square-container">
        <div className="square">
          <img src="moda 1.png" alt="Moda" className="square-image" />
        </div>
        <p className="square-label">Moda</p>
      </div>
    </div>
  );
};

export default Area;
