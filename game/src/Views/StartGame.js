import React from 'react';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';



// vista incial, donde se va a crear el juego
const StartGame  = () => {
  
  return (
    <div>
        <Grid item xs={4}>
            <TextField
                id="nombre"
                label="Nombre del jugador" 
                variant="outlined"/> 
         <Link to="/PlacingPieces">Crear Partida</Link>
           
        </Grid>       
    </div>  
  );
};

export default StartGame;
