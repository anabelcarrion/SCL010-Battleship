import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import GameBoard from '../Components/GameBoard';


function Game() {

  return (
    <div>
     <Link to="/PlacingPieces">Volver</Link>
     
     <h1>Estamos en la sala de juego</h1>
    <Button variant="outlined">
        turno
    </Button>
    <GameBoard/>
    <Link to="/EndGame">Jugar</Link>
    </div>
  );
}

export default Game;