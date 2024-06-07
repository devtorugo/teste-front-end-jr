import React from 'react';
import './styles.css'; 

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

const App = () => {
  return (
    <div className="container">
      <Card side="left" />
      <Card side="right" />
    </div>
  );
};

export default App;
