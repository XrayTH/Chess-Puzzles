import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js'; 
import './Chess.css'

const ChessGame = () => {

    const waifu = [
        {
            id: 1,
            comentario: "Bienvenido onii-chan, haz el jaque en un solo mocimiento para ganar. <3"
        },{
            id: 2,
            comentario: "Esa no es la solucion... ¡Sigue intentando! :)"
        },{
            id: 3,
            comentario: "¡Hmp! Ese movimiento no es valido >:c"
        },{
            id: 4,
            comentario: "¡Lo lograste! Buen trabajo, senpai >u<"
        }
    ]

    let mov = '8/7p/5B2/7P/3p4/3Pk1K1/8/q1N5 w - - 0 1'

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
                    alert("Sigue intentando...")
                    setFen(chess.fen(chess.undo()))
                }

            }
        } catch (error) {
            alert("Movimiento invalido!") 
            
        }
    };



    return (
        <div id="principal">
            <div id="Chessboard">
            <Chessboard
                position={fen}
                onDrop={(move) => handleMove({ from: move.sourceSquare, to: move.targetSquare, promotion: 'q'})}
                width={500}
                
            />
            </div>

            <div id="tools">
                <div id="mainTools">
                    <div id="comment">Dialogo...</div>
                    <div id="time">0:00</div>
                </div>
                <div id="kwaii">Personaje :3</div>
            </div>

        </div>
    );
};

export default ChessGame;
