import React from 'react';
import './Styles/Perfil.css';

function Perfil() {
  // Ejemplo de array de comentarios
  const comentarios = [
    'Este es el primer comentario.',
    'Segundo comentario aquí.',
    'Otro comentario interesante.',
  ];

  return (
    <div className="Perfil">
      <section className="content">
        {/* Cuadro izquierdo con círculo y botones */}
        <div className="left-box">
          <div className="circle"></div>
          <div className="user-info">
            <p>Nombre de Usuario</p>
            <p>Puesto</p>
            <p>Exp</p>
          </div>
          <button className="button">Opciones</button>
          <button className="button">Cerrar Sesión</button>
        </div>

        {/* Cuadro derecho con imagen, información, ranking y comentarios */}
        <div className="right-box">
          <div className="image-container">
            <img src="https://img.freepik.com/fotos-premium/hermosos-paisajes-paisajes-naturales-hacen-que-personas-relajen-disfruten-fondo-pantalla_917506-214429.jpg" alt="Imagen" />
          </div>
          <div className="info-box">
            <h2>Información</h2>
            <p>Texto de información aquí...</p>
          </div>
         
          <div className="ranking-box">
            <h2>Ranking</h2>
            <ul>
              <li>Puntaje Nivel 1:</li>
              <li>Puntaje Nivel 2:</li>
              <li>Puntaje Nivel 3:</li>
              <li>Puntaje Nivel 4:</li>
              <li>Puntaje Nivel 5:</li>
            </ul>
          </div>

          <div className="image-container2">
            <img src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/gfuvmfczfyosqs1k4ema" alt="Imagen" />
          </div>

          <div className="comments-box">
            <h2>Comentarios</h2>
            {/* Usar el método map para mostrar los comentarios en el textarea */}
            <textarea className="textarea" value={comentarios.map((comentario) => `${comentario}\n`).join('')} readOnly></textarea>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Perfil;
