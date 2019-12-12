import React from 'react';
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';
import GameBoard1 from '../Components/GameBoard1';
import GameBoard2 from '../Components/GameBoard2';


function Game() {

  return (
    <div>
     <Link to="/PlacingPieces">Volver</Link>
     
     <h1>Estamos en la sala de juego</h1>
    <GameBoard1/>
    <Button variant="outlined">
        turno
    </Button>
    <GameBoard2/>
    <Link to="/EndGame">Jugar</Link>
    </div>
  );
}

export default Game;