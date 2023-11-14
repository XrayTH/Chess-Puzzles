import React, { useState } from 'react';
import './Styles/Rank.css';

function Rank() {
  const [players, setPlayers] = useState([
    { puesto: 1, nombre: 'Valverde', puntaje: 150, posicionAnterior: 2 },
    { puesto: 2, nombre: 'Javier', puntaje: 90, posicionAnterior: 1 },
    // Agrega más jugadores según sea necesario
  ]);

  return (
    <div className="rank-container">
      <h2>
        Ranking
        <span className="corona">👑</span>
      </h2>
      <table className="rank-table">
        <thead>
          <tr>
            <th>Puesto</th>
            <th>Nombre</th>
            <th>Puntaje</th>
            <th>Desempeño</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.puesto}</td>
              <td>{player.nombre}</td>
              <td>{player.puntaje}</td>
              <td>
                {player.puesto < player.posicionAnterior ? (
                  <span className="arrow-up">&uarr;</span>
                ) : player.puesto > player.posicionAnterior ? (
                  <span className="arrow-down">&darr;</span>
                ) : (
                  <span className="equal">=</span>
                )}
                {/* Agrega el sentido */}
                {player.puesto < player.posicionAnterior ? (
                  <span className="siente">¡Subió!</span>
                ) : player.puesto > player.posicionAnterior ? (
                  <span className="siente">¡Bajó!</span>
                ) : (
                  <span className="siente">¡Se mantuvo!</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rank;
