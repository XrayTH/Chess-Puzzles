import Chess from "./Chessboard";
import "./Styles/App.css"

function App() {
  return (
    <div>
      <header>Chess Puzzles</header>

      <nav>
        <ul>
          <li>Inicio</li>
          <li>Perfil</li>
          <li>Puzzles</li>
          <li>Ranking</li>
        </ul>
      </nav>

    <article>

      <aside>
        <h1>Puzzles:</h1>
        <ul>
          <li>Nivel 1</li>
        </ul>
      </aside>

      <Chess/>
    </article>

    </div>
  );
}

export default App;
