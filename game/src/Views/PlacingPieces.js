import React from 'react';
import CreateGameBoard from '../Components/CreateGameBoard';
import {Link} from "react-router-dom";
import { Button } from '@material-ui/core';
import firebase from '../data/firebase'
import { getDefaultWatermarks } from 'istanbul-lib-report';

export const PlacingPiecesContext=React.createContext();

function PlacingPieces() {
  
    const [piecesToSave,setPiecesToSave] = React.useState([]);
    
    const [isSavedInFirebase,setIsSavedInFirebase] = React.useState(false);
    const sentToFirebase = async () => {
      try {
          console.log(piecesToSave);
          const getNameFromLocalStorage = JSON.parse(localStorage.getItem('name'));
          const getTableFromLocalStorage = JSON.parse(localStorage.getItem('table'));
    
          const db = firebase.firestore();
          let docRef = await db.collection("game").add({
            name1: getNameFromLocalStorage,
            pieces:piecesToSave
          })

          docRefGamer = docRef.id;
          localStorage.setItem('gameId',docRefGamer);
          console.log('id.documento:', docRefGamer);
          setIsSavedInFirebase(true)
                    
      } catch (err) {
          console.log('failed');
      }
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
          Guardar en Firebase
      </Button>
       <Button variant="outlined" disabled = {!isSavedInFirebase}>
      <Link to="/Game">Jugar</Link>
      </Button>  
      </footer>
    </div>
  );
}

export default PlacingPieces;