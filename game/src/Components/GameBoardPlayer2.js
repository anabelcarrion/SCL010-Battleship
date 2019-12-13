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
    
    
    //llenar la tabla
    for (let index = 0; index < dataPlayer2.pieces.length; index++) {
      let piece = dataPlayer2.pieces[index];
      for (let i=piece.x; i< piece.x + piece.sizeH; i++){
        for (let j=piece.y; j< piece.y + piece.sizeV; j++){
          table [i][j].state = true; 
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
  
  const checkPosition=(x, y)=>{
    let table=copyTable(tableState);
    let pieceFound = false;
    for (let index = 0; index < dataPlayer2.pieces.length; index++){
      let piece= dataPlayer2.pieces[index];
      if(isPositionUccupied(x,y,piece)){
        alert("hay una pieza");
        pieceFound = true;
        for (let i=piece.x; i< piece.x + piece.sizeH; i++){
          for (let j=piece.y; j< piece.y + piece.sizeV; j++){
            table [i][j].state = true; 
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
                      className={
                        (tableState[position.x][position.y].state ?
                           "occupiedCell" :
                              (tableState[position.x][position.y].checked ? "checkedCell" : "emptyCell"))                      
                      }
                      onClick={() =>
                       checkPosition(position.x, position.y)
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
