import React from 'react';
import { useState, useEffect } from 'react'
import usuarioService from "./services/usuarios"
import './Styles/Perfil.css';

function Perfil() {

  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [points, setPoints] = useState("");
  const [points1, setPoints1] = useState("");
  const [points2, setPoints2] = useState("");
  const [points3, setPoints3] = useState("");
  const [points4, setPoints4] = useState("");
  const [points5, setPoints5] = useState("");

  useEffect(() => {
    usuarioService
      .getByID(localStorage.getItem('Login'))
      .then(usuario => {
        setNombre(usuario.user);
        setPuesto(usuario.puesto);
        setPoints(usuario.total);
        setPoints1(usuario.bestlvl1);
        setPoints2(usuario.bestlvl2);
        setPoints3(usuario.bestlvl3);
        setPoints4(usuario.bestlvl4);
        setPoints5(usuario.bestlvl5)
      })
      .catch(error => {
        console.error("Error al obtener el usuario:", error);
      });
  }, []);

  return (
    <div className="Perfil">
      <section className="content">
        <div className="left-box">
          <div className="circle"></div>
          <div className="user-info">
            <p>{nombre}</p>
            <p>Clasificación: {puesto === 99111 ? "Sin Clasificar" : puesto+"°"}</p>
            <p>Puntaje: {points}</p>
          </div>
          {/*<button className="button">Opciones</button>*/}
          <button className="button" onClick={() => {
            localStorage.setItem('Login', '');
            window.location.reload();
          }}>Cerrar</button>
        </div>

        <div className="right-box">
          <div className="image-container">
            <img src="https://img.freepik.com/fotos-premium/hermosos-paisajes-paisajes-naturales-hacen-que-personas-relajen-disfruten-fondo-pantalla_917506-214429.jpg" alt="Imagen" />
          </div>
          {/*<div className="info-box">
            <h2>Información</h2>
            <p>Texto de información aquí...</p>
          </div>*/}

          <div className="ranking-box">
            <h2>Ranking</h2>
            <ul>
              <li>Puntaje Nivel 1: {points1}</li>
              <li>Puntaje Nivel 2: {points2}</li>
              <li>Puntaje Nivel 3: {points3}</li>
              <li>Puntaje Nivel 4: {points4}</li>
              <li>Puntaje Nivel 5: {points5}</li>
            </ul>
          </div>

          <div className="image-container2">
            <img src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/gfuvmfczfyosqs1k4ema" alt="Imagen" />
          </div>
          {/*}
          <div className="comments-box">
            <h2>Comentarios</h2>
            <textarea className="textarea" value={comentarios.map((comentario) => `${comentario}\n`).join('')} readOnly></textarea>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}

export default Perfil;
