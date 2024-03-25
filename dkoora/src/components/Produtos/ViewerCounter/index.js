import React, { useState, useEffect } from 'react';
import './style.css'; // Estilo CSS para o componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ViewerCounter = () => {
  const [viewersCount, setViewersCount] = useState(0);

  // Simula uma atualização em tempo real do contador de visualizações
  useEffect(() => {
    const interval = setInterval(() => {
      // Gere um número aleatório entre 1 e 100 para simular visualizadores
      const newCount = Math.floor(Math.random() * 100) + 1;
      setViewersCount(newCount);
    }, 5000); // Atualiza a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="viewer-counter">
        <div className="eye-icon">
        <FontAwesomeIcon icon={faEye} className="eye-icon" />
            <i className="fas fa-eye"></i>
        </div>
        <div className="viewers-info">
        {viewersCount > 1 ? (
            `${viewersCount} pessoas estão vendo isso agora`
        ) : (
            `${viewersCount} pessoa está vendo isso agora`
        )}
        </div>
    </div>
  );
}

export default ViewerCounter;
