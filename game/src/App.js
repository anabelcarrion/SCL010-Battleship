import React from 'react';
import GameBoard from './Components/GameBoard';
import Pieces from './Components/Pieces';
import './App.css';

function App() {
  return (
    <div className="App">
    <GameBoard/>
    <Pieces/>
    </div>
  );
}

export default App;
