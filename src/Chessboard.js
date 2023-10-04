import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import {Chess} from 'chess.js'; // Asegúrate de instalar 'chess.js'

const ChessGame = () => {
  const [chess] = useState(new Chess());
  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move) => {
    if (chess.move(move)) {
      // Actualiza el estado del tablero después de un movimiento válido
      setFen(chess.fen());
      console.log(move)
     
    }
    
  };

  

  return (
    <div>
      <Chessboard
        position={fen}
        onDrop={(move) => handleMove({ from: move.sourceSquare, to: move.targetSquare })}
      />
    </div>
  );
};

export default ChessGame;
