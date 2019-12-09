import React, { useState } from 'react';
//import { usePieceState } from './Pieces';
import './GameBoard.css';
import Pieces from './Pieces';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

//creando context
export const GameBoardPaintContext=React.createContext();

// tablero

const GameBoard2 = () => {

  return (
    <div id='gameBoard2'>
    <h1>aqui va el tablero del jugado y del contrincante, los cuales seran armados con la data guardada en firebase</h1>
    </div>
  );
};

export default GameBoard2;
