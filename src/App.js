import React, { useState } from 'react';
import Perfil from "./Perfil"
import Chess from "./Chessboard"
import Rank from "./Ranking"
import AdvLogin from "./advertenciaLogin"
import { Inicio } from './Inicio';
import "./Styles/App.css"
import logo from "./imagenes/Logo Chees Puzzles.png"
import patron1 from "./imagenes/Patron 1.png"
import patron2 from "./imagenes/patron 2.png"


const Top = ({ page, select }) => {
  return (
    <>
      <header><img id="patron" src={patron1} alt="Chess Puzzles"/><img id="logo" src={logo} alt="Chess Puzzles" /><img id="patron" src={patron2} alt="Chess Puzzles"/></header>

      <nav>
        <ul>
          <li onClick={() => {select(1); localStorage.setItem('pagina', '1')}}>Inicio</li>
          <li onClick={() => {select(2); localStorage.setItem('pagina', '2')}}>Perfil</li>
          <li onClick={() => {select(3); localStorage.setItem('pagina', '3')}}>Puzzles</li>
          <li onClick={() => {select(4); localStorage.setItem('pagina', '4')}}>Ranking</li>
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
        if (localStorage.getItem('Login') !== "" && localStorage.getItem('Login') !== null) {
          return (
            <>
              <Perfil />
            </>
          );
        } else {
          return (
            <>
              <AdvLogin />
            </>
          );
        }
      
    case 3:
      if (localStorage.getItem('Login') !== "" && localStorage.getItem('Login') !== null) {
        return (
          <article>
          <Aside level={level} sLevel={sLevel}/>
          <Chess level={level}/>
        </article>
        );
      } else {
        return (
          <>
            <AdvLogin />
          </>
        );
      }

    case 4:
      return (
        <>
          <Rank />
        </>
      )

    default:
      return (
        <>
          <Inicio />
        </>
      )
  }

}

function App() {
  const [page, setPage] = useState(localStorage.getItem('pagina') * 1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  let bStyle = {}

  if(localStorage.getItem('pagina') * 1 !== 3 || (localStorage.getItem('Login') === "" || localStorage.getItem('Login') === null) ){
    bStyle = {
      display: 'none'
    }
  }

  if (localStorage.getItem('pagina') * 1 === '' || localStorage.getItem('pagina') * 1 === null || localStorage.getItem('pagina') * 1 === undefined) {
    setPage(1);
  }

  const select = (x) => {
    setPage(x);
    window.location.reload();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button className={`toggle-sidebar ${isSidebarOpen ? 'arrow-left' : 'arrow-right'}`} onClick={toggleSidebar} style={bStyle}></button>
      <div id="puzzles" className={`app-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Top page={page} select={select} />
        <Article page={page} />
      </div>
    </div>
  );
}

export default App;
