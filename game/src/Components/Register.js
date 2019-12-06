import React from 'react';


import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


// vista incial, donde se va a crear el juego
const Register  = () => {
  
  return (
    <div id='gameBoard'>
        <Grid item xs={4}>
         <TextField
         id="nombre"
         label="Nombre del jugador" 
         variant="outlined"/> 
         <TextField
         id="numero de columnas"
         label="numero de columnas"
         variant="outlined"/>
         <TextField
         id="numero de filas"
         label="numero de filas"
         variant="outlined"/>
          <Button variant="outlined">
       crear juego
      </Button>
        </Grid>

       
    </div>
    
  );
};

export default Register;
