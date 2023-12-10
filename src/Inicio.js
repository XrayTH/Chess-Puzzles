// Inicio.js
import React, { useState, useEffect } from 'react'
import sha256 from 'crypto-js/sha256'
import "./Styles/Inicio.css"
import noticiaService from "./services/noticias"
import usuarioService from "./services/usuarios"

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
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState(''); // Corrección en el uso de useState

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let usuario = "";

    try {
      usuario = await usuarioService.getByUser(nombre);
    } catch (error) {
      usuario = null;
    }

    try {
       
      const userObject = {
        user: nombre,
        password: sha256(contrasena).toString(),
        firstlvl1: 0,
        firstlvl2: 0,
        firstlvl3: 0,
        firstlvl4: 0,
        firstlvl5: 0,
        bestlvl1: 0,
        bestlvl2: 0,
        bestlvl3: 0,
        bestlvl4: 0,
        bestlvl5: 0,
        total: 0,
        puesto: 99111,
        antPuesto: 9111
      };
  
      if (usuario === null) {
        const nuevoUsuario = await usuarioService.create(userObject);
        console.log("Respuesta del servicio al crear usuario:", nuevoUsuario)
        setMensaje(`Cuenta "${nuevoUsuario.user}" creada, inicie sesión.`);
      } else {
        setMensaje("Usuario ya existente.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMensaje("Ocurrió un error al procesar la solicitud.");
    }
  };
  

  return (
    <div className="form-container">
      <h2 className="form-title">Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="nombre">
          Usuario:
        </label>
        <input
          className="form-input"
          type="text"
          id="nombre"
          name="nombre"
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="contrasena">
          Contraseña:
        </label>
        <input
          className="form-input"
          type="password"
          id="contrasena"
          name="contrasena"
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        {/* Mostrar el mensaje dinámico */}
        {mensaje && <p>{mensaje}</p>}
        <button className="form-button" type="submit">
          Registrarse
        </button>
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