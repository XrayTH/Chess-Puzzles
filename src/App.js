import React, { useState } from 'react';
import Chess from "./Chessboard";
import "./Styles/App.css"

const Top = () => {
  return (
    <>
      <header>Chess Puzzles</header>

      <nav>
        <ul>
          <li>Inicio</li>
          <li>Perfil</li>
          <li>Puzzles</li>
          <li>Ranking</li>
        </ul>
      </nav>
    </>
  )
}

const Article = () => {

  const [page, setPage] = useState(3)

  switch (page) {
    case 1:
      return (
        <>
          <p>1</p>
        </>
      )

    case 2:
      return (
        <>
          <p>2</p>
        </>
      )

    case 3:
      return (
        <article>
          <aside>
            <h1>Puzzles:</h1>
            <ul>
              <li>Nivel 1</li>
            </ul>
          </aside>

          <Chess />
        </article>
      )

    case 4:
      return (
        <>
          <p>4</p>
        </>
      )

    default:
      return (
        <>
          <p>?</p>
        </>
      )
  }

}

function App() {



  return (
    <div>

      <Top />

      <Article/>

    </div>
  );
}

export default App;
