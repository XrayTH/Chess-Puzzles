// Inicio.js
import React, { useState } from 'react';
import "./Styles/Inicio.css";
import App from './App';

function Inicio() {
  const [opcion, setOpcion] = useState(null);

  return (
    <div className="inicio-container">
      <div className="inicio-header">
        <h1 className="inicio-title">Bienvenido.</h1>
        <h3>Por favor, elige una opción:</h3>
      </div>

      <div className="opciones-container">
        <button className="opcion-button" onClick={() => setOpcion('iniciarSesion')}>Iniciar Sesión</button>
        <button className="opcion-button" onClick={() => setOpcion('registrarse')}>Registrarse</button>
      </div>

      <div className="contenido-container">
        {opcion === 'iniciarSesion' && <IniciarSesion />}
        {opcion === 'registrarse' && <Registrarse />}
      </div>

      <div className={`noticias-container ${opcion ? 'after-click' : 'before-click'}`}>
        <h2>Noticias</h2>
        <p>El nivel 6 se agregará pronto. ¡Mantente actualizado!</p>
        <p>El nivel 7 se agregará pronto. ¡Mantente actualizado!</p>
        <p>El nivel 8 se agregará pronto. ¡Mantente actualizado!</p>
        <p>El nivel 9 se agregará pronto. ¡Mantente actualizado!</p>
        <p>El nivel 10 se agregará pronto. ¡Mantente actualizado!</p>
        <p>Juan Valverde es el Numero 1 de esta Semana.</p>
        {/* Agrega más noticias según sea necesario */}
      </div>
    </div>
  );
}


function IniciarSesion() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para iniciar sesión
    console.log('Iniciar sesión con: ', email, contrasena);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="email">Correo Electrónico:</label>
        <input className="form-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="contrasena">Contraseña:</label>
        <input className="form-input"
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button className="form-button" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

function Registrarse() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para registrar al usuario
    console.log('Registrarse con: ', nombre, email, contrasena);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="nombre">Nombre:</label>
        <input className="form-input"
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="email">Correo Electrónico:</label>
        <input className="form-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="contrasena">Contraseña:</label>
        <input className="form-input"
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button className="form-button" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export { Inicio, IniciarSesion, Registrarse };