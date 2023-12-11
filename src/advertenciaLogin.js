import React from 'react';

const MensajeInicioSesion = () => {
  const mensajeStyle = {
    backgroundColor: 'green',
    padding: '20px',
    borderRadius: '5px',
    color: 'white',
    textAlign: 'center',
  };

  const contenedorStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={contenedorStyle}>
      <div style={mensajeStyle}>
        <p>Por favor, Inicia Sesión</p>
      </div>
    </div>
  );
};

export default MensajeInicioSesion;
