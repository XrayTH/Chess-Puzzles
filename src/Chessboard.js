import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js'; 

const ChessGame = () => {
    let mov = '8/7p/5B2/7P/3p4/3Pk1K1/8/q1N5 w - - 0 1';

    const [chess] = useState(new Chess(mov));
    const [fen, setFen] = useState(chess.fen());

    const handleMove = (move) => {
        try {
            if (chess.move(move)) {

                setFen(chess.fen(move));
                console.log(chess.fen(move))
                console.log(move)

                if (chess.isCheckmate()) {

                    alert("Buen Trabajo!")
                }else{
                    alert("Erroneo!")
                    setFen(chess.fen(chess.undo()))
                }

            }
        } catch (error) {
            alert("Erroneo!") 
            
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
