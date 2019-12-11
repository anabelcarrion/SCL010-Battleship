import React, { useState } from 'react';
//import { usePieceState } from './Pieces';
import './GameBoard.css';
import Pieces from './Pieces';
import firebase from '../data/firebase';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const GameBoardPaintContext=React.createContext();

const GameBoard2 = () => {
  
  //creando context
  
  //Traer el valor del id del documento
  const getKeyFromLocalStorage = JSON.parse(localStorage.getItem('key'));
  
  // tablero
  const db = firebase.firestore();
  db.collection('game').doc(getKeyFromLocalStorage).get()
  .then(function(doc) {
    console.log('HOLA', doc.data())
  })

  return (
    <div id='gameBoard2'>
    </div>
  );
};

export default GameBoard2;
