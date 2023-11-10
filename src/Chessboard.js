import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import iniciarCronometro from './iniciarCronometro';
import './Styles/Chess.css'
import waifu1 from "./imagenes/chan1.png"
import waifu2 from "./imagenes/chan2.png"



const ChessGame = () => {

    const waifu = [
        {
            comentario: "Bienvenido onii-chan, haz el jaque en un solo movimiento para ganar. (Cuida del tiempo y tus vidas)",
            imagen: waifu1
        }, {
            comentario: "Esa no es la solucion... ¡Sigue intentando! :)",
            imagen: waifu2
        }, {
            comentario: "¡Hmp! Ese movimiento no es valido >:c", 
            imagen: waifu2
        }, {
            comentario: "¡Lo lograste! Buen trabajo, senpai >u<",
            imagen: waifu1
        }, {
            comentario: "Has perdido, senpai... QwQ",
            imagen: waifu2
        }
    ]

    let nvl1 = '8/7p/5B2/7P/3p4/3Pk1K1/8/q1N5 w - - 0 1'
    const [com, setCom] = useState(waifu[0].comentario)
    const [img, setImg] = useState(waifu[0].imagen)
    const [vidas, setVidas] = useState(3)
    const [semueve, setSemueve] = useState(true)
    const [tiempo, setTiempo] = useState('0:00')
    const tiempoInicial = 30; 
    const [press, setPress] = useState(false)
    const [chess] = useState(new Chess(nvl1))
    const [fen, setFen] = useState()

    const setMonaChina = (x) => {
        setCom(waifu[x].comentario)
        setImg(waifu[x].imagen)
    }

    const inicio = () => {
        setFen(chess.fen(chess.load(nvl1)))
        setPress(true)
        setSemueve(true)
        setVidas(3)
        setMonaChina(0)
    }

    const handleStart = () => {
        inicio()
            iniciarCronometro(tiempoInicial, (tiempoFormateado) => {
            setTiempo(tiempoFormateado);
            if (tiempoFormateado === "0:00" && !chess.isCheckmate()) {
                setMonaChina(4)
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
        setMonaChina(4)
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
                    setMonaChina(3)
                    setSemueve(false)
                    setTiempo("0:00")
                    setPress(false)
                    iniciarCronometro(0, (tiempoFormateado) => {
                        setTiempo(tiempoFormateado)
                    })
                } else {
                    //alert("Sigue intentando...")
                    setMonaChina(1)
                    setFen(chess.fen(chess.undo()))
                    setVidas(vidas - 1)

                    if (vidas === 1) {
                        lose()

                    }
                }

            }
        } catch (error) {
            //alert("Movimiento invalido!")
            setMonaChina(2)
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
                    lightSquareStyle={{backgroundColor: 'gray'}}
                    darkSquareStyle={{backgroundColor: 'darkGreen'}}

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
                <div id="kwaii"><img src={img} alt="monaChinacaguai"></img></div>
            </div>

        </div>
    );
};

export default ChessGame;
