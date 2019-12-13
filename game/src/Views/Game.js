import React from 'react';
import {Link} from "react-router-dom";
import { Button, Input } from '@material-ui/core';
import GameBoardPlayer1 from '../Components/GameBoardPlayer1';
import GameBoardPlayer2 from '../Components/GameBoardPlayer2';
import firebase from '../data/firebase'

//creando context 
export const ContexPlayer1=React.createContext();
export const ContexPlayer2=React.createContext();

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

function getPlayer2(opponentGameBoardId){
  return new Promise((resolve,reject) =>{
        //conexiones a firebase
    const db = firebase.firestore();
    const docRef = db.collection("game").doc(opponentGameBoardId);
    console.log("gameid en get player", localStorage.getItem(opponentGameBoardId))
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
  const [dataPlayer1, setdataPlayer1] = React.useState({pieces:[],checkedPositions:[]});
  const [dataPlayer2, setdataPlayer2] = React.useState({pieces:[],checkedPositions:[]});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpponentLoaded, setIsOpponentLoaded] = React.useState(false);
  const [opponentGameBoardId, setOpponentGameBoardId] = React.useState();


  //objeto del context
  const ContexPlayer1State = {dataPlayer1,setdataPlayer1};
  const ContexPlayer2State = {dataPlayer2,setdataPlayer2};
  
  React.useEffect(() => {
    // Actualiza el título del documento usando la API del navegadort
    setIsLoading(true);
    getPlayer1()
    .then(player1 => {
      setdataPlayer1(player1);
      setIsLoading(false);
    })
  },[dataPlayer2]);

  const showPlayer2=()=>{
    getPlayer2(opponentGameBoardId)
    .then(player2 => {
      if (player2.name1) {
        player2.id=opponentGameBoardId;
        setdataPlayer2(player2);
        setIsOpponentLoaded(true);
      }else{
        alert("codigo del oponente incorrecto");
      }
      
    })
    .catch (err=> {
      alert("codigo del oponente incorrecto");
      setIsOpponentLoaded(false);
    })
  }
  
  const updateGame=()=>{
    setIsLoading(true);
    setIsOpponentLoaded(false);
    getPlayer1()
    .then(player1 => {
      setdataPlayer1(player1);
      setIsLoading(false);
    });
    getPlayer2(opponentGameBoardId)
    .then(player2 => {
      player2.id=opponentGameBoardId;
      setdataPlayer2(player2);
      setIsOpponentLoaded(true);
    })
  }
  
  return isLoading ? <h1>Is loading</h1> : (
    <div>
      <div className="AreaJugador1">
        <h1>Jugador:{dataPlayer1.name1}</h1>
        <ContexPlayer1.Provider value={ContexPlayer1State}>
        <GameBoardPlayer1/>
        </ContexPlayer1.Provider>
      </div>
      <Button variant="outlined"
          onClick={() => updateGame()}>
            Actualizar
        </Button>
      <div className="AreaJugador2">
        <h1>Jugador:{dataPlayer2.name1}</h1>
        <Input id="opponentGameBoardId"
          type="text" 
          placeholder="Ingrese codigo de oponente" 
          onChange={(event)=>setOpponentGameBoardId(event.target.value)}
         ></Input>
        <Button variant="outlined"
          onClick={() => showPlayer2()}>
            Cargar Oponente
        </Button>
        { !isOpponentLoaded ? <h1>cargando oponente :)</h1> :( <ContexPlayer2.Provider value={ContexPlayer2State}>
      <GameBoardPlayer2/>
    </ContexPlayer2.Provider>)}
    </div>
    <Link to="/EndGame">terminar juego</Link>
    </div>
  );
}

export default Game;