import React from 'react';
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';

function EndGame() {
  return (
    <div>
      <h1>Has ganado!</h1>
      <h3>No puedes comprar la felicidad pero puedes adoptar un perrito y eso es casi lo mismo</h3>
      <Link to="/Game">Volver</Link>
      <Button><Link to="/PlacingPieces">Revancha</Link></Button>
      <Button variant="outlined"><Link to="/StartGame"></Link>Salir</Button>
    </div>
  );
}

export default EndGame;