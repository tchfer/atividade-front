import React from 'react';
import { Link } from 'react-router-dom';
import Lottie, { LottieProps } from 'react-lottie';
import animationData from './animation.json';
import './home.css';

const lottieOptions: LottieProps['options'] = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="image-container">
          <Lottie options={lottieOptions} />
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
