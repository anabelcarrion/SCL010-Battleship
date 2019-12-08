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

const GameBoard1 = () => {

  let emptyPiece = {
    name: '',
    img:'',
    sizeHorizontal:0,
    sizeVertical:0,
    orientation: ''   
  }  

  // fijar tamaño de tabla
  let tableHeight = 10;
  let tableWidth =10;
  let table = [];

  // crear la tabla
  for (let h = 0; h < tableHeight; h++) {
    let row = [];
    for (let w = 0; w < tableWidth; w++) {
      row[w] = { state:false, x: w, y: h };
    }
    table[h] = row;
  }

  // creando los estados para la tabla y las piez seleccionada
  const [tableState, setTableState] = useState(table);
  const [selectedPiece, setSelectedPiece] = useState(emptyPiece);

  // marcar una celda de la tabla y cambiarla de estado
  const setPiece = (x, y) => {
    let newTable = tableState.map(x => x);
    let sizeHorizontal = selectedPiece.sizeHorizontal;
    let sizeVertical = selectedPiece.sizeVertical;
    if(selectedPiece.orientation === "vertical"){
      sizeHorizontal = selectedPiece.sizeVertical;
      sizeVertical = selectedPiece.sizeHorizontal;
    }

    for (let i=0; i<sizeHorizontal && (x+i)<newTable.length; i++){
      for (let j=0; j<sizeVertical && (y+j)<newTable.length; j++){
        newTable[x+i][y+j].state = true;
      }
    }
    return newTable;
  };

  const setID = position => {
    return parseInt(position.x.toString() + position.y.toString()) + 1;
  };

  const gameBoardState = {selectedPiece,setSelectedPiece};

  return (
    <div id='gameBoard'>
      <div id='boardPlayer1'>
       <div>
          <GameBoardPaintContext.Provider value={gameBoardState}>
            <Pieces/>
          </GameBoardPaintContext.Provider>
        </div>
        <Paper>
          <Table id='boardPlayer1'>
            <TableBody>
              {tableState.map(row => (
                <TableRow>
                  {row.map(position => (
                    <TableCell
                      id={setID(position)}
                      data={[position.x, position.y]}
                      className={(tableState[position.x][position.y].state ? "occupiedCell" : "emptyCell")}
                      onClick={() =>
                        setTableState(setPiece(position.x, position.y))
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
    </div>
  );
};

export default GameBoard1;
