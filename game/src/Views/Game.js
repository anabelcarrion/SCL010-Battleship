import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import GameBoard1 from '../Components/GameBoard1';
import GameBoard2 from '../Components/GameBoard2';


function Game() {
  return (
    <div>
     <Link to="/PlacingPieces">Volver</Link>
     <Link to="/EndGame">Jugar</Link>
     <h1>Estamos en la sala de juego</h1>
    <GameBoard1/>
    <GameBoard2/>
    <Button variant="outlined">
        Jugar
    </Button>
    </div>
  );
}

export default Game;