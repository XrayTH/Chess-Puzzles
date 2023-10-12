import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import iniciarCronometro from './iniciarCronometro';
import './Chess.css'
import myImage from "./300x500.gif"



const ChessGame = () => {

    const waifu = [
        {
            comentario: "Bienvenido onii-chan, haz el jaque en un solo movimiento para ganar. <3 (Cuida del tiempo y tus vidas)"
        }, {
            comentario: "Esa no es la solucion... ¡Sigue intentando! :)"
        }, {
            comentario: "¡Hmp! Ese movimiento no es valido >:c"
        }, {
            comentario: "¡Lo lograste! Buen trabajo, senpai >u<"
        }, {
            comentario: "Has perdido senpai... QwQ"
        }
    ]

    let mov = '8/7p/5B2/7P/3p4/3Pk1K1/8/q1N5 w - - 0 1'
    const [com, setCom] = useState(waifu[0].comentario)
    const [vidas, setVidas] = useState(3)
    const [semueve, setSemueve] = useState(true)
    const [tiempo, setTiempo] = useState('0:00')
    const [press, setPress] = useState(false)
    const tiempoInicial = 30; // Tiempo inicial en segundos
    const [chess] = useState(new Chess(mov))
    const [fen, setFen] = useState()


    const handleStart = () => {
        setFen(chess.fen(chess.load(mov)))
        setPress(true)
        setSemueve(true)
        setVidas(3)
        setCom(waifu[0].comentario)
        iniciarCronometro(tiempoInicial, (tiempoFormateado) => {
            setTiempo(tiempoFormateado);
            if (tiempoFormateado === "0:00" && !chess.isCheckmate()) {
                setCom(waifu[4].comentario)
                setSemueve(false)
                setPress(false)
                setFen()
            }
        });
    };

    const lose = () => {
        setTiempo("0:00")
        iniciarCronometro(0, (tiempoFormateado) => {
            setTiempo(tiempoFormateado)
        })
        setCom(waifu[4].comentario)
        setSemueve(false)
        setPress(false)
        setFen()
    }

    const handleMove = (move) => {
        try {
            if (chess.move(move)) {

                setFen(chess.fen(move));
                console.log(chess.fen(move))


                if (chess.isCheckmate()) {

                    //alert("Buen Trabajo!")
                    setCom(waifu[3].comentario)
                    setSemueve(false)
                    setTiempo("0:00")
                    setPress(false)
                    iniciarCronometro(0, (tiempoFormateado) => {
                        setTiempo(tiempoFormateado)
                    })
                } else {
                    //alert("Sigue intentando...")
                    setCom(waifu[1].comentario)
                    setFen(chess.fen(chess.undo()))
                    setVidas(vidas - 1)

                    if (vidas === 1) {
                        lose()

                    }
                }

            }
        } catch (error) {
            //alert("Movimiento invalido!")
            setCom(waifu[2].comentario)
            setVidas(vidas - 1)

            if (vidas === 1) {
                lose()

            }

        }
    };




    return (
        <div id="principal">
            <div id="Chessboard">
                <Chessboard
                    position={fen}
                    onDrop={(move) => handleMove({ from: move.sourceSquare, to: move.targetSquare, promotion: 'q' })}
                    draggable={semueve}
                    width={500}

                />
            </div>

            <div id="tools">
                <div id="mainTools">
                    <div id="comment">{com}</div>
                    <div id="time">
                        <p>Tiempo: {tiempo}</p>
                        <p>Vidas: {vidas}</p>
                        <button onClick={handleStart} disabled={press}>Iniciar</button>
                    </div>
                </div>
                <div id="kwaii"><img src={myImage} alt="ekisde"></img></div>
            </div>

        </div>
    );
};

export default ChessGame;
