import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js'; 
import './Chess.css'

const ChessGame = () => {

    const waifu = [
        {
            comentario: "Bienvenido onii-chan, haz el jaque en un solo movimiento para ganar. <3"
        },{
            comentario: "Esa no es la solucion... ¡Sigue intentando! :)"
        },{
            comentario: "¡Hmp! Ese movimiento no es valido >:c"
        },{
            comentario: "¡Lo lograste! Buen trabajo, senpai >u<"
        },{
            comentario: "Has perdido senpai... QwQ"
        }
    ]

    let mov = '8/7p/5B2/7P/3p4/3Pk1K1/8/q1N5 w - - 0 1'
    const [com, setCom] = useState(waifu[0].comentario)
    const [semueve, setSemueve] = useState(true)


    const [chess] = useState(new Chess(mov));
    const [fen, setFen] = useState(chess.fen());

    const handleMove = (move) => {
        try {
            if (chess.move(move)) {

                setFen(chess.fen(move));
                console.log(chess.fen(move))
                

                if (chess.isCheckmate()) {

                    //alert("Buen Trabajo!")
                    setCom(waifu[3].comentario)
                    setSemueve(false)
                }else{
                    //alert("Sigue intentando...")
                    setCom(waifu[1].comentario)
                    setFen(chess.fen(chess.undo()))
                }

            }
        } catch (error) {
            //alert("Movimiento invalido!")
            setCom(waifu[2].comentario)
            
        }
    };



    return (
        <div id="principal">
            <div id="Chessboard">
            <Chessboard
                position={fen}
                onDrop={(move) => handleMove({ from: move.sourceSquare, to: move.targetSquare, promotion: 'q'})}
                draggable ={semueve}
                width={500}
                
            />
            </div>

            <div id="tools">
                <div id="mainTools">
                    <div id="comment">{com}</div>
                    <div id="time">0:00</div>
                </div>
                <div id="kwaii">Personaje :3</div>
            </div>

        </div>
    );
};

export default ChessGame;
