import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Button, Input } from '@material-ui/core';
// import firebase from '../data/firebase';

// vista incial, donde se va a crear el juego
const StartGame  = () => {

  const [userName, setUserName] = useState('Jugador');
  
  //Guardando el nombre ingresado en localstorage y enviando mensaje de whatsapp
  function sentToFirebase(userName) {
    localStorage.setItem('name', JSON.stringify(userName));
    //Se envia la petición de enviar por wsp pero falta agregar URL para entrar al juego
    window.location.href = 'whatsapp://send?text=Puedes bañar a estos perritos más rápido que yo? Únete a mi juego'
  }

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
            onClick={() => sentToFirebase(userName)}
          >Crear partida</Button></Link>
    </section>
    <a><img src="https://i.ibb.co/CzRsWYX/portada.jpg" alt="portada"></img></a>   
    </div>   
  );
};

export default StartGame;
