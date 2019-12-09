import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

function EndGame() {
  return (
    <div>
     <h1>informacion sobre adopcion de perritos</h1>
     <Link to="/Game">Volver</Link>
     <p></p> 
     <Link to="/PlacingPieces">Revancha</Link>
     <p></p>
     <Button variant="outlined">
        Salir
    </Button>

  
    </div>
  );
}

export default EndGame;