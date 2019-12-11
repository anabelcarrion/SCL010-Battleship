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
        0: getTableFromLocalStorage[0],
        1: getTableFromLocalStorage[1],
        2: getTableFromLocalStorage[2],
        3: getTableFromLocalStorage[3],
        4: getTableFromLocalStorage[4],
        5: getTableFromLocalStorage[5],
        6: getTableFromLocalStorage[6],
        7: getTableFromLocalStorage[7],
        8: getTableFromLocalStorage[8],
        9: getTableFromLocalStorage[9] 
      })
      .then(function(docRef) {
        docRefGamer = docRef.id;
        localStorage.setItem('key', JSON.stringify(docRefGamer));
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