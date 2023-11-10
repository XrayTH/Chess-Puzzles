import React, { useState } from 'react';
import Inicio from "./Inicio"
import Perfil from "./Perfil"
import Chess from "./Chessboard"
import Rank from "./Ranking"
import "./Styles/App.css"

// hola

const Top = ({ page, select }) => {
  return (
    <>
      <header>Chess Puzzles</header>

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
          <aside>
            <h1>Puzzles:</h1>
            <ul>
              <li>Nivel 1</li>
              <li>Nivel 2</li>
              <li>Nivel 3</li>
              <li>Nivel 4</li>
              <li>Nivel 5</li>
            </ul>
          </aside>

          <Chess />
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

  const [page, setPage] = useState(3);

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
