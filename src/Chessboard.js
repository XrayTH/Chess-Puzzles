import React, { useState, useEffect } from 'react';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import iniciarCronometro from './iniciarCronometro';
import './Styles/Chess.css'
import waifu1 from "./imagenes/chan1.png"
import waifu2 from "./imagenes/chan2.png"



const ChessGame = ({ level }) => {

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
    let nvl2 = '1nr1r3/pbkq1ppp/2p5/8/5N2/5Q2/PPPB1PPP/3R1RK1 w - - 0 1'
    let nvl3 = 'r2qk2r/pbppPppp/1p6/8/2P2n1Q/BP6/P4PPP/3RR1K1 w kq - 0 1'
    let nvl4 = 'r4rk1/p5bn/3p2Np/5Np1/6P1/8/PP5P/2KR1R2 w - - 0 1'
    let nvl5 = '5r2/k7/Np6/7p/1P2b1pP/4Pr2/R4PKB/8 w - - 0 1'



    const [com, setCom] = useState(waifu[0].comentario)
    const [img, setImg] = useState(waifu[0].imagen)
    const [vidas, setVidas] = useState(3)
    const [semueve, setSemueve] = useState(true)
    const [tiempo, setTiempo] = useState('0:00')
    const [tiempoInicial, setTI] = useState(30)
    const [press, setPress] = useState(false)
    const [nvl, setNvl] = useState(nvl3)
    const [chess] = useState(new Chess(nvl))
    const [fen, setFen] = useState()

    useEffect(() => {
        console.log('Nivel actualizado:', level);
        switch (level) {
            case 1:
                setNvl(nvl1)
                setTI(20)
                break
            case 2:
                setNvl(nvl2)
                setTI(30)
                break
            case 3:
                setNvl(nvl3)
                setTI(40)
                break
            case 4:
                setNvl(nvl4)
                setTI(50)
                break
            case 5:
                setNvl(nvl5)
                setTI(60)
                break
            default:
                console.log("watafa")
        }
        console.log('Estado del juego actualizado:', nvl);
    
        // Realiza aquí cualquier otra acción que desees después de la actualización del estado
      }, [level, nvl]);

    

    const setMonaChina = (x) => {
        setCom(waifu[x].comentario)
        setImg(waifu[x].imagen)
    }

    const inicio = () => {
        setFen(chess.fen(chess.load(nvl)))
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

    const tiempoStringASeconds = (tiempoString) => {
        const [minutos, segundos] = tiempoString.split(':').map(Number);
        return minutos * 60 + segundos;
      }

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
                    lightSquareStyle={{ backgroundColor: '#B3B3B3' }}
                    darkSquareStyle={{ backgroundColor: '#333333' }}

                />
            </div>

            <div id="tools">
                <div id="mainTools">
                    <div id="comment">{com}</div>
                    <div id="time">
                        <p>Nivel Seleccionado: {level}</p>
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

export default ChessGame