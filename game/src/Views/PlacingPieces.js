import React from 'react';
import GameBoard1 from '../Components/GameBoard1';
import {Link} from "react-router-dom";


function PlacingPieces() {
  return (
    <div>
     <h1>Coloca las perritos en el tablero de juego</h1>
     <Link to="/StarGame">Volver</Link> 
     <GameBoard1/> 
     <Link to="/Game">Jugar</Link>   
    </div>
  );
}

export default PlacingPieces;