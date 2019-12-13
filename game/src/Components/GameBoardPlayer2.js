import React, { useState } from 'react';
//import { usePieceState } from './Pieces';
import './GameBoard.css';
import {ContexPlayer2} from '../Views/Game';
import firebase from '../data/firebase'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


let checkedPositions=[];
let foundPieces=0;

const GameBoardPlayer2 = () => {

  //importando contesto
  const {dataPlayer2, setdataPlayer2} = React.useContext(ContexPlayer2);
  // creando la tabla
  const createTablePlayer1=()=>{
    // fijar tamaño de tabla
    let tableHeight = 10;
    let tableWidth =10;
    let table = [];

    for (let h = 0; h < tableHeight; h++) {
      let row = [];
      for (let w = 0; w < tableWidth; w++) {
       row[w] = { state:false, x: h, y: w, checked:false};
      }
      table[h] = row;
    }
    console.log(dataPlayer2)
    for (let i = 0; i < dataPlayer2.checkedPositions.length; i++) {
      let position = dataPlayer2.checkedPositions[i];
      table [position.x][position.y].checked = true;
    }
    
    
    
    for (let index = 0; index < dataPlayer2.pieces.length; index++) {
      let piece = dataPlayer2.pieces[index];
      for (let i=piece.x; i< piece.x + piece.sizeH; i++){
        for (let j=piece.y; j< piece.y + piece.sizeV; j++){
          if(table [i][j].checked){
            table [i][j].state = true; 
          }          
        }
      }     
    }
    return table;
  }
  const [tableState, setTableState] = useState(createTablePlayer1());
  
  const copyTable = (table) =>{
    return table.map( x => {
      return x.map( y => {
        return { ...y} 
       })
     });
  }

  
  const savePosition = (x,y) => {
    checkedPositions.push({x:x, y:y})
    const db = firebase.firestore();
    const data = db.collection('game');
    data.doc(dataPlayer2.id).set({
      checkedPositions:checkedPositions
      }, { merge: true })   
  }

  const isPositionUccupied=(x,y,piece)=>{
    return x >= piece.x && x < piece.x + piece.sizeH 
      && y >= piece.y && y < piece.y + piece.sizeV 
  }

  const addFoundPiece = () =>{
    foundPieces++;
    const db = firebase.firestore();
    const data = db.collection('game');
    data.doc(dataPlayer2.id).set({
      foundPieces:foundPieces
      }, { merge: true })   
  }
  
  const checkPosition=(position)=>{
    let table=copyTable(tableState);
    let pieceFound = false;
    let x = position.x;
    let y = position.y;
    for (let index = 0; index < dataPlayer2.pieces.length; index++){
      let piece= dataPlayer2.pieces[index];
      if(isPositionUccupied(x,y,piece) && !(position.state&&position.checked)){
        alert("hay una pieza");
        addFoundPiece()
        pieceFound = true;
        for (let i=piece.x; i< piece.x + piece.sizeH; i++){
          for (let j=piece.y; j< piece.y + piece.sizeV; j++){
            table [i][j].state = true;
            table [i][j].checked = true;
            savePosition(i,j);
          }
        }
      }
    }
    if (!pieceFound) {
      table [x][y].checked = true;
    }
    savePosition(x,y);
    setTableState(table)
  }

  const positionColor = (position) => {
    if(position.state){
      if(position.checked){
        return "cleanDog";
      }else{
        return "dirtyDog";
      }
    }else{
      if (position.checked){
        return "water";
      }
    }
    return "emptyCell";
  }

    return (
      <div id='gameBoard'>
        <Paper>
          <Table id='boardPlayer1'>
            <TableBody>
              {tableState.map(row => (
                <TableRow>
                  {row.map(position => (
                    <TableCell
                      data={[position.x, position.y]}
                      className={positionColor(position)}
                      onClick={() =>
                       checkPosition(position)
                      }
                    >
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  
  
};

export default GameBoardPlayer2;
