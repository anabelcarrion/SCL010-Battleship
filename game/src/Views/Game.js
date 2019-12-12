import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import GameBoradPlayer1 from '../Components/GameBoradPlayer1';
import firebase from '../data/firebase'
import { rejects } from 'assert';

//creando context para piezas
export const GameContext=React.createContext();

function getPlayer1(){
  return new Promise((resolve,reject) =>{
        //conexiones a firebase
    const db = firebase.firestore();
    const docRef = db.collection("game").doc(localStorage.getItem('gameId'));
    console.log("gameid en get player", localStorage.getItem('gameId'))
    docRef.get().then(function(doc) {
      console.log("documento de firebase", doc.data())
      resolve(doc.data()) 
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
    console.log()
  })
}

function getPlayer2(){
  return new Promise((resolve,reject) =>{
        //conexiones a firebase
    const db = firebase.firestore();
    const docRef = db.collection("game").doc(localStorage.getItem('gameId'));
    console.log("gameid en get player", localStorage.getItem('gameId'))
    docRef.get().then(function(doc) {
      console.log("documento de firebase", doc.data())
      resolve(doc.data()) 
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
    console.log()
  })
}
function Game() {

  // hook
  const [dataPlayer1, setdataPlayer1] = React.useState({pieces:[]});
  const [dataPlayer2, setdataPlayer2] = React.useState({pieces:[]});
  const [isLoading, setIsLoading] = React.useState(false);

  //objeto del context
  const gameContext = {dataPlayer1,setdataPlayer1};

  
  React.useEffect(() => {
    // Actualiza el título del documento usando la API del navegadort
    setIsLoading(true);
    getPlayer1()
    .then(player1 => {
      setdataPlayer1(player1);
      setIsLoading(false);
    })
  },[]);

  
  return isLoading ? <h1>Is loading</h1> : (
    <div>
    <h1>Estamos en la sala de juego de {dataPlayer1.name1}</h1>
    <Button variant="outlined">
        Cargar Oponente
    </Button>
    <GameContext.Provider value={gameContext}>
      <GameBoradPlayer1/>
    </GameContext.Provider>
    <Link to="/EndGame">terminar juego</Link>
    </div>
  );
  
}

export default Game;