import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Button, Input } from '@material-ui/core';
import firebase from '../data/firebase';

// vista incial, donde se va a crear el juego
const StartGame  = () => {

  const [userName, setUserName] = useState('Jugador');
  const [keyGamer2, setKeyGamer2] = useState(null);
  
  //Guardando el nombre ingresado en localstorage y enviando mensaje de whatsapp
  function sentToLocalStorage(userName, keyGamer2) {
    if (keyGamer2 != null) {
      localStorage.setItem('key', JSON.stringify(keyGamer2))
      const db = firebase.firestore();
      db.collection("game").doc(keyGamer2).get().then(function(doc) {
        if (doc.exists) {
          const db = firebase.firestore();
          db.collection("game").doc(keyGamer2).update({
            name2: userName,
          })
        }
      })
    } else {
      const db = firebase.firestore();
      db.collection("game").add({
        name1: userName,
      })
      .then(function(doc) {
        console.log('Key:', doc.id);
        alert('Envia esta clave para que un jugador se una al juego: ' + doc.id)
        localStorage.setItem('key', JSON.stringify(doc.id))
        db.collection("game").doc(doc.id).update({
          key: doc.id
        })
        //Se envia la petición de enviar por wsp pero falta agregar URL para entrar al juego
        window.location.href = 'whatsapp://send?text=Puedes bañar a estos perritos más rápido que yo? Únete a mi juego';
      })
      }
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
          <Input
            type="text" 
            placeholder="Clave"
            onChange={(event) => setKeyGamer2(event.target.value)}>
          </Input>
            <Link to="/PlacingPieces"><Button variant="outlined"
            onClick={() => sentToLocalStorage(userName, keyGamer2)}
          >Comenzar a jugar</Button></Link>
    </section>
    <a><img src="https://i.ibb.co/CzRsWYX/portada.jpg" alt="portada"></img></a>   
    </div>   
  );
};

export default StartGame;
