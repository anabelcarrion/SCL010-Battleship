import React from 'react';
import GameBoard from './Components/GameBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          TAKE A SHOWER BATTLE
        </h1>
        <p>El juego más divertido</p>
      </header>
      <nav>
        <button class>Re start</button>
      </nav>
      <section>
        <GameBoard/>
      </section>
    </div>
  );
}

export default App;
