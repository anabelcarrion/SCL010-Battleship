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
    
    const [isSavedInFirebase,setIsSavedInFirebase] = React.useState(false);
    const sentToFirebase = async () => {
      try {
          console.log(piecesToSave);
          const getNameFromLocalStorage = JSON.parse(localStorage.getItem('name'));
          //guardando en firebase
          const db = firebase.firestore();
          let docRef = await db.collection("game").add({
            name1: getNameFromLocalStorage,
            pieces: piecesToSave,
            checkedPositions: []
          })

          docRefGamer = docRef.id;
          localStorage.setItem('gameId',docRefGamer);
          console.log('id.documento:', docRefGamer);
          setIsSavedInFirebase(true);
          sentInvitation(docRefGamer);

      } catch (err) {
          console.log('failed');
      }
    }

    const sentInvitation = (docRefGamer) => {
      //Se envia la petición de enviar por wsp pero falta agregar URL para entrar al juego
      window.location.href = 'whatsapp://send?text=Puedes bañar a estos perritos más rápido que yo? Únete a mi juego ingresando esta clave en tu juego: ' + docRefGamer.toString() 
    }
  
  let piecesToSaveState = {piecesToSave,setPiecesToSave};  

  return (
    <div id="outer-placing-pieces">
    <nav>
    <Link to="/StartGame"><Button id="back-btn"><i class="far fa-arrow-alt-circle-left"></i></Button></Link>
    <h1>Coloca las perritos en el tablero de juego</h1>
    </nav>
    <div id="placing-pieces"> 
     <PlacingPiecesContext.Provider value={piecesToSaveState}>
        <CreateGameBoard/>
     </PlacingPiecesContext.Provider>  
    </div>
    <footer>
     <Button variant="outlined"
      onClick={() => sentToFirebase()}>
        1. Guardar juego
      </Button>
       <Button 
       variant="outlined" 
       disabled = {!isSavedInFirebase}>
      <Link to="/Game">2. Jugar</Link>
      </Button>  
      </footer>
    </div>
  );
}

export default PlacingPieces;