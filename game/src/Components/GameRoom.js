import React from 'react';
import GameBoard1 from './GameBoard1';
import GameBoard2 from './GameBoard2';


function GameRooms() {
  return (
    <div className="App">
     <h1>Estamos en la sala de juego</h1>
    <GameBoard1/>
    <GameBoard2/>
    </div>
  );
}

export default GameRooms;