import React from 'react';
import CreateGameBoard from '../Components/CreateGameBoard';
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';
import firebase from '../data/firebase'

export const PlacingPiecesContext=React.createContext();


function PlacingPieces() {

    //Variable que guarda el id del doc
    let docRefGamer;
    const [piecesToSave,setPiecesToSave] = React.useState([]);
    
    // función enviar nombre y piezas seleccionadas a firebase
    const sentToFirebase = () => {
      console.log(piecesToSave);
      const getNameFromLocalStorage = JSON.parse(localStorage.getItem('name'));
      const getTableFromLocalStorage = JSON.parse(localStorage.getItem('table'));

      const db = firebase.firestore();
      db.collection("game").add({
        name1: getNameFromLocalStorage,
        pieces:piecesToSave
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
  
  let piecesToSaveState = {piecesToSave,setPiecesToSave};  

  return (
    <div id="outer-placing-pieces">
    <nav><h1>Coloca las perritos en el tablero de juego</h1></nav>
    <section id="placing-pieces">
     <Link to="/StartGame"><Button variant="outlined">Volver</Button></Link> 
     <PlacingPiecesContext.Provider value={piecesToSaveState}>
        <CreateGameBoard/>
     </PlacingPiecesContext.Provider> 
     <Button variant="outlined"
      onClick={() => sentToFirebase()}
      >
      <Link to="/Game">Jugar</Link>
      </Button>   
    </section>
    </div>
  );
}

export default PlacingPieces;