import { useState, useEffect } from 'react'
import usuarioService from "./services/usuarios"
import './Styles/Rank.css';

function Rank() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    usuarioService
      .getAll()
      .then(initialPlayers => {
        setPlayers(initialPlayers.sort((a, b) => b.total - a.total))
    
    console.log(players)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="rank-container">
      <h2>
        Ranking
        <span className="corona">👑</span>
      </h2>
      <h4>Al Puntaje Total solo se sumarán los Puntajes del primer intento, Los mejores Puntajes individuales
         los puede ver en su Perfil.</h4>
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
              <td>{player.puesto === 99111 ? 'Sin Clasificar' : player.puesto}</td>
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
