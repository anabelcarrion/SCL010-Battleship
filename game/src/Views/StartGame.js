import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Button, Input } from '@material-ui/core';
import firebase from '../data/firebase';

// vista incial, donde se va a crear el juego
const StartGame  = () => {

  const [userName, setUserName] = useState('Jugador');

  return (
    <div id="outer-section">
    <section id="start-game">
          <Input 
          type="text" 
          placeholder="Nombre" 
          onChange={(event) => setUserName(event.target.value)}
          required={true}>
          </Input>
            <Link to="/PlacingPieces"><Button variant="outlined"
            onClick={() => sentToLocalStorage(userName)}
          >Comenzar a jugar</Button></Link>
    </section>
    <a><img src="https://i.ibb.co/CzRsWYX/portada.jpg" alt="portada"></img></a>   
    </div>   
  );
};

export default StartGame;
