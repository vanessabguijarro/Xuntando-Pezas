import React from 'react';

interface BotonEnviarProps {
  onClick: () => void;
}

const BotonEnviar: React.FC<BotonEnviarProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Enviar
    </button>
  );
};

export default BotonEnviar;
