import { useState, useEffect } from 'react'
import usuarioService from "./services/usuarios"
import './Styles/Rank.css';

function Rank() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    usuarioService
      .getAll()
      .then(initialPlayers => {
        setPlayers(initialPlayers)
    
    console.log(players)
      })
  }, [])

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
              <td>{player.user}</td>
              <td>{player.total}</td>
              <td>
                {player.puesto < player.antPuesto ? (
                  <span className="arrow-up">&uarr;</span>
                ) : player.puesto > player.antPuesto ? (
                  <span className="arrow-down">&darr;</span>
                ) : (
                  <span className="equal">=</span>
                )}
                {/* Agrega el sentido */}
                {player.puesto < player.antPuesto ? (
                  <span className="siente">¡Subió!</span>
                ) : player.puesto > player.antPuesto ? (
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
