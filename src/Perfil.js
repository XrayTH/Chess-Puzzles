// Perfil.js

import React from 'react';
import './Styles/Perfil.css'; // Asegúrate de tener un archivo CSS para tus estilos

function Perfil() {
  return (
    <div className="Perfil">

      <section className="content">
        {/* Cuadro izquierdo con círculo y botones */}
        <div className="left-box">
          <div className="circle"></div>
          <button className="button" id="options">
            Opciones
          </button>
          <button className="button" id="logout">
            Cerrar Sesión
          </button>
        </div>

        {/* Cuadro derecho con imagen, información y comentarios */}
        <div className="right-box">
          <div className="image-container">
            {/* Espacio para la imagen */}
            <img src="url_de_tu_imagen" alt="Imagen" />
          </div>
          <div className="info-box">
            {/* Espacio para información */}
            <h2>Información</h2>
            <p>Texto de información aquí...</p>
          </div>
          <div className="comments-box">
            {/* Espacio para comentarios */}
            <h2>Comentarios</h2>
            <textarea placeholder="Escribe tus comentarios aquí..."></textarea>
          </div>
        </div>
      </section>
    </div>
  );
  <div className="left-box">
  <div className="circle"></div>
  <div className="user-info">
    {/* Aquí puedes agregar información de usuario, como nombre, correo, etc. */}
    <p>Nombre de Usuario</p>
    <p>Correo Electrónico</p>
  </div>
  <button className="button">Opciones</button>
  <button className="button">Cerrar Sesión</button>
</div>
}

export default Perfil;
