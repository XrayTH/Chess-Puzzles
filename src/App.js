import React, { useState } from 'react';
//import Inicio from "./Inicio"
import Perfil from "./Perfil"
import Chess from "./Chessboard"
import Rank from "./Ranking"
import { Inicio } from './Inicio';
import "./Styles/App.css"
import logo from "./imagenes/Logo Chees Puzzles.png"
import patron1 from "./imagenes/Patron 1.png"
import patron2 from "./imagenes/patron 2.png"


const Top = ({ page, select }) => {
  return (
    <>
      <header><img src={patron1} alt="Chess Puzzles"/><img id="logo" src={logo} alt="Chess Puzzles" /><img src={patron2} alt="Chess Puzzles"/></header>

      <nav>
        <ul>
          <li onClick={() => select(1)}>Inicio</li>
          <li onClick={() => select(2)}>Perfil</li>
          <li onClick={() => select(3)}>Puzzles</li>
          <li onClick={() => select(4)}>Ranking</li>
        </ul>
      </nav>
    </>
  );
};

const Article = ({ page }) => {

  const [level, setLevel] = useState(1)

  const sLevel = (x) => {
    setLevel(x)
  } 

  const Aside = ({level, setLevel}) => {

    return(
      <aside>
            <h1>Puzzles:</h1>
            <ul>
              <li onClick={() => sLevel(1)}>Nivel 1</li>
              <li onClick={() => sLevel(2)}>Nivel 2</li>
              <li onClick={() => sLevel(3)}>Nivel 3</li>
              <li onClick={() => sLevel(4)}>Nivel 4</li>
              <li onClick={() => sLevel(5)}>Nivel 5</li>
            </ul>
          </aside>
    )

  }

  switch (page) {
    case 1:
      return (
        <>
          <Inicio />
        </>
      )

    case 2:
      return (
        <>
          <Perfil />
        </>
      )

    case 3:
      return (
        <article>
          <Aside level={level} sLevel={sLevel}/>
          <Chess level={level}/>
        </article>
      )

    case 4:
      return (
        <>
          <Rank />
        </>
      )

    default:
      return (
        <>
          <p>Error</p>
        </>
      )
  }

}

function App() {

  const [page, setPage] = useState(1);

  const select = (x) => {
    setPage(x);
  };

  return (
    <div>
      <div>
        <Top page={page} select={select} />
        <Article page={page} />
      </div>
    </div>
  );
}

export default App;
