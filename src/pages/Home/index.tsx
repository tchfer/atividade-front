import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home: React.FC = () => {
    return (
      <div className="home-container">
        <div className="content">
          <div className="image-container">
            <img src={require('./task-img.svg')} alt="Task Image" />
          </div>
          <div className="text-container">
            <h1 className="home-title">Meu Gerenciador de Tarefas</h1>
            <p className="home-description">Organize suas tarefas de forma simples e eficiente.</p>
            <Link to="/tarefas" className="task-button">
              Começar
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  