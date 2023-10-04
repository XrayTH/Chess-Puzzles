import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js'; // Asegúrate de instalar 'chess.js'

const ChessGame = () => {
    const [chess] = useState(new Chess());
    const [fen, setFen] = useState(chess.fen());

    const handleMove = (move) => {
        try {
            if (chess.move(move) !== null) {
                // Actualiza el estado del tablero después de un movimiento válido
                setFen(chess.fen(move));
                console.log(move)

            }
        } catch (error) {
            alert("Movimiento invalido")
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
