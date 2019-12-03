import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GameRoom from './GameRoom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


// vista incial, donde se va a crear el juego
const Register  = () => {
  
    function LinkTab(props) {
        return ( 
          <Tab component={Link} {...props}/>
        );
      }

  return (
    <div id='gameBoard'>
<Grid item xs={12}>
        <TextField
         id="nombre"
         label="Nombre del jugador"/>
         <TextField
         id="numero de columnas"
         label="numero de columnas"/>
         <TextField
         id="numero de filas"
         label="numero de filas"/>
        <Router>
            <Tabs>
                <LinkTab label="crear sala de juego" to={"/sala-de-juego"}/>  
            </Tabs>
            <Route path="/sala-de-juego" component={GameRoom}/>
        </Router>
        </Grid>
    </div>
    
  );
};

export default Register;
