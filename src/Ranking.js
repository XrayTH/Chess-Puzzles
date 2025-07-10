import { useState, useEffect } from 'react'
import usuarioService from "./services/usuarios"
import './Styles/Rank.css';

function Rank() {
  const [players, setPlayers] = useState([{puesto: 0, user: "Cargando...", total: "Por favor, espere...", antPuesto: 0}]);

  useEffect(() => {
    usuarioService
      .getAll()
      .then(initialPlayers => {
      if (!initialPlayers) return;
      setPlayers(initialPlayers.sort((a, b) => b.total - a.total))
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="rank-container">
      <h2>
        Ranking
        <span className="corona">👑</span>
      </h2>
      <h4>Al Puntaje Total solo se sumarán los Primeros Puntajes en cada nivel, Los mejores Puntajes individuales
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
              <td>{player.puesto === 99111 ? 'N/A' : player.puesto}</td>
              <td>{player.user.length > 15 ? `${player.user.slice(0, 11)}...` : player.user}</td>
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
                  <span className="siente">¡Igual!</span>
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
