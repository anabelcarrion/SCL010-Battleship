import React, { useState } from 'react';
//import { usePieceState } from './Pieces';
import './GameBoard.css';
import Pieces from './Pieces';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// tablero
const GameBoard1 = () => {
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

  // estado
  const [tableState, setTableState] = useState(table);


  let pieceSelected = {
    name:'perro1',
    size:2,
    orientation: 'vertical'
  };

  // marcar una celda de la tabla y cambiarla de estado
  const setPiece = (x, y) => {
    let newTable = tableState.map(x => x);
    for (let i=0; i<pieceSelected.size && (x+i)<newTable.length; i++){
      newTable[x+i][y].state = true;
    }
    return newTable;
  };

  const setID = position => {
    return parseInt(position.x.toString() + position.y.toString()) + 1;
  };
  return (
    <div id='gameBoard'>
      <div id='boardPlayer1'>
       <div><Pieces/></div>
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
