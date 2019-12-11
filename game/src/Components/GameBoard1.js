import React, { useState } from 'react';
//import { usePieceState } from './Pieces';
import './GameBoard.css';
import Pieces from './Pieces';
import firebase from '../data/firebase'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ToggleButton from '@material-ui/lab/ToggleButton';

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

  // creando la tabla
  for (let h = 0; h < tableHeight; h++) {
    let row = [];
    for (let w = 0; w < tableWidth; w++) {
      row[w] = { state:false, x: w, y: h };
    }
    table[h] = row;
  }

  // creando los estados para la tabla y las pieza seleccionada
  //tabla
  const [tableState, setTableState] = useState(table);
  //piezas
  const [selectedPiece, setSelectedPiece] = useState(emptyPiece);
  //Toggle-Buton
  const [isRotated, setIsRotated] = useState(false);

  let pieceSelected = {
    name:'perro1',
    size:2,
    orientation: 'vertical'
  };

  // marcar una celda de la tabla y cambiarla de estado
  const setPiece = (x, y) => {
    let newTable = tableState.map( x => {
       return x.map( y => {
         return { ...y} 
        })
      });
    let sizeHorizontal = selectedPiece.sizeHorizontal;
    let sizeVertical = selectedPiece.sizeVertical;
    if(isRotated){
      sizeHorizontal = selectedPiece.sizeVertical;
      sizeVertical = selectedPiece.sizeHorizontal;
    }
    for (let i=0; i<sizeHorizontal; i++){
      for (let j=0; j<sizeVertical; j++){
        if((x+i)>=newTable.length || (y+j)>=newTable.length){
          alert("No hay espacio suficiente para colocar esta pieza");
          return tableState;
        }
        if(tableState[x+i][y+j].state){
          alert("No se puede insertar la pieza porque ya existe una pieza en esta posición");
        return tableState;
        }
        newTable[x+i][y+j].state = true;
        //Enviando tabla con las piezas montadas a localstorage
        localStorage.setItem('table', JSON.stringify(newTable))
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
          <ToggleButton
          value="check"
          selected={isRotated}
           onChange={() => {
            setIsRotated(!isRotated);
          }}>Rotar
        </ToggleButton>
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
