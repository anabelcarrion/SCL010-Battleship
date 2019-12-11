import React from 'react';
import GameBoard1 from '../Components/GameBoard1';
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';
import firebase from '../data/firebase'

function PlacingPieces() {

    //Variable que guarda el id del doc
    let docRefGamer;
    
    // función enviar nombre y piezas seleccionadas a firebase
    const sentToFirebase = () => {
      const getNameFromLocalStorage = JSON.parse(localStorage.getItem('name'));
      const getTableFromLocalStorage = JSON.parse(localStorage.getItem('table'));
      const db = firebase.firestore();
      db.collection("game").add({
        name1: getNameFromLocalStorage,
        board1: null
      })
      .then(function(docRef) {
        docRefGamer = docRef.id;
        console.log('id.documento:', docRefGamer)
      // Remover info guardada en localstorage
      // .then(function() {
        //  localStorage.removeItem('name1');   
      // })
      return sentToFirebase;
      })
    }
  
  return (
    <div>
     <h1>Coloca las perritos en el tablero de juego</h1>
     <Link to="/StartGame">Volver</Link> 
     <GameBoard1/> 
     <Button
      onClick={() => sentToFirebase()}
      >
       <Link to="/Game">Jugar</Link>
      </Button>   
    </div>
  );
}

export default PlacingPieces;