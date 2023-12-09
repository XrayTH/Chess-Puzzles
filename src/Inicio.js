// Inicio.js
import React, { useState, useEffect } from 'react';
import "./Styles/Inicio.css";
import noticiaService from "./services/noticias"
import App from './App';

function Inicio() {
  const [opcion, setOpcion] = useState(null);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    noticiaService
      .getAll()
      .then(initialNoticias => {
        setNoticias(initialNoticias.reverse())
    
    console.log(noticias)
      })
  }, [])

  const containerClass = opcion ? `inicio-container opciones-seleccionada` : "inicio-container";
  
  const switchToRegistro = () => {
    setOpcion('registrarse');
  };

  return (
    <div className={containerClass}>
      <div className="contenedor-bienvenida">
        <div className="inicio-header">
          <h1 className="inicio-title">Bienvenido.</h1>
          <h3>Por favor, elige una opción:</h3>
        </div>
        <div className="opciones-container oculto">
        <button className="opcion-button" onClick={() => setOpcion('iniciarSesion')}>Iniciar Sesión</button>
          <button className="opcion-button" onClick={() => setOpcion('registrarse')}>Registrarse</button>
          <button onClick={()=>localStorage.setItem('Login', 'Xray')}>Xray</button>
          <button onClick={()=>localStorage.setItem('Login', 'Mongo')}>Mongo</button>
          <button onClick={()=>localStorage.setItem('Login', 'pepe')}>pepe</button>
          <button onClick={()=>localStorage.setItem('Login', 'noname')}>noname</button>
          <button onClick={()=>localStorage.setItem('Login', '')}>Cerrar</button>
        </div>
      </div>
      
      <div className="contenido-container">
        {opcion === 'iniciarSesion' && <IniciarSesion onSwitchToRegistro={switchToRegistro} />}
        {opcion === 'registrarse' && <Registrarse onSwitchToInicioSesion={() => setOpcion('iniciarSesion')} />}
      </div>

      <div className="noticias-container">
      <h2>Noticias</h2>
      {noticias.map((noticia, index) => (
        <div key={index} className="noticia">
          <h3>{noticia.titulo}</h3>
          <p>{noticia.contenido}</p>
        </div>
      ))}
    </div>
    </div>

  );
}


function IniciarSesion({ onSwitchToRegistro }) {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciar sesión con: ', email, contrasena);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="username">Usuario:</label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="contrasena">Contraseña:</label>
        <input
          className="form-input"
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button className="form-button" type="submit">Iniciar Sesión</button>
        <button
          className="form-button"
          type="button"
          onClick={onSwitchToRegistro}
        >
          Quiero registrarme
        </button>
      </form>
    </div>
  );
}

function Registrarse({ onSwitchToInicioSesion }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registrarse con: ', nombre, email, contrasena);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="nombre">Nombre:</label>
        <input
          className="form-input"
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="email">Correo Electrónico:</label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="contrasena">Contraseña:</label>
        <input
          className="form-input"
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button className="form-button" type="submit">Registrarse</button>
        <button
          className="form-button"
          type="button"
          onClick={onSwitchToInicioSesion}
        >
          Ya tengo una cuenta
        </button>
      </form>
    </div>
  );
}

export { Inicio, IniciarSesion, Registrarse };