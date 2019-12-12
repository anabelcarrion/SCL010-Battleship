import React from 'react';
import CreateGameBoard from '../Components/CreateGameBoard';
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';
import firebase from '../data/firebase'
import { getDefaultWatermarks } from 'istanbul-lib-report';

export const PlacingPiecesContext=React.createContext();

function PlacingPieces() {

    const [piecesToSave,setPiecesToSave] = React.useState([]);
    
    // const sentToFirebase = () => {
      //   console.log('Piezas para guardar:', piecesToSave);
      //   const getKeyFromLocalStorage = JSON.parse(localStorage.getItem('key'));
      //   console.log('Key:', getKeyFromLocalStorage);
      //   const db = firebase.firestore();
      //   db.collection("game").doc(docRefGamer).get().then(function(doc) {
        //     if (doc.exists) {
          //       console.log('Data2:', doc.data());
          //     }
          //   })
          
          //   .then(function(docRef) {
            //     docRefGamer = docRef.id;
            //     localStorage.setItem('key', JSON.stringify(docRefGamer));
            //   })
            //   .then(function() {
              //     getData();
              //   })
              //   return sentToFirebase;
              //   // Remover info guardada en localstorage
              //   // .then(function() {
                //     //  localStorage.removeItem('name1');   
                //   // })
                // }
                
      // función enviar nombre y piezas seleccionadas a firebase
      const sentToFirebase = () => {
      const getKeyFromLocalStorage = JSON.parse(localStorage.getItem('key'));
      console.log('GETKEY:', getKeyFromLocalStorage);
      let dataUser;
      const db = firebase.firestore();
      db.collection("game").where("key", "==", getKeyFromLocalStorage)
      .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          dataUser = doc.data()
          console.log('DATAINFO:', dataUser);
          if (doc.exists) {
            dataUser.map(dataName => {
              if (dataName.nombre1 == true) {
                const db = firebase.firestore();
                db.collection("game").doc(getKeyFromLocalStorage).update({
                  pieces1: piecesToSave
                })
              }
              if (dataName.nombre1 == true && dataName.nombre2 == true) {
                const db = firebase.firestore();
                db.collection("game").doc(getKeyFromLocalStorage).update({
                  pieces2: piecesToSave
                })
              }
            })
          } 
        });
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