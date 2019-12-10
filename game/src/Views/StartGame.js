import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Button, Input } from '@material-ui/core';
import firebase from '../data/firebase';

// vista incial, donde se va a crear el juego
const StartGame  = () => {

  const [userName, setUserName] = useState('Jugador');

  function sentToFirebase(userName) {
    const db = firebase.firestore();
    db.collection("game").add({
      nombre1: userName,
    })
    .then(function() {
      window.location.href = 'whatsapp://send?text=Puedes bañar a estos perritos más rápido que yo? Únete a mi juego'
        // console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    console.log('Hola jugador:', userName);
  }

  return (
    <div>
        <Grid item xs={4}>
          <Input 
          type="text" 
          placeholder="Ingresa tu nombre"
          onChange={(event) => setUserName(event.target.value)}
          required={true}>
          </Input>
          <Button
          // onClick={() => sentToFirebase(userName)}
          >
            <Link to="/PlacingPieces">Crear Partida</Link>
          </Button>
        </Grid>       
    </div>  
  );
};

export default StartGame;
