import React, {useState } from 'react';
import { usePieceState } from './Pieces';

import './GameBoard.css';
//import Pieces from './Components/Pieces';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default  function GameBoard () { 
        //declarando tamaño de la tabla
        let tableHeight=5;
        let tableWidth=5;
        let table=[];
        
        //creando la tabla
        for (let h=0; h<tableHeight; h++){
            let row =[];
            for(let w=0; w<tableWidth; w++){
                row[w]={state:"false",x:w,y:h};
            }
            table[h]=row;
        }
        
        //estado
        const [tableState, setTableState]=useState(table);

        //marcar una celda de la tabla y cambiarla de estadp
        function setPiece(x,y){
            console.log(x,y)
            let newTable = tableState.map(x=>x);
            newTable[x][y].state = "true";
            console.log(newTable)
            return newTable;
        }
    
        return (
            <div id="gameBoard">
              <div id="boardPlayer1">  
                <Paper >
                    <Table id="boardPlayer1">
                        <TableBody>
                            {tableState.map(row => (
                                <TableRow>
                                    {row.map(position => ( 
                                        <TableCell className="square" onClick={()=>setTableState(setPiece(position.x,position.y))}>
                                            {tableState[position.x][position.y].state}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
              </div>
            </div> 
        )
       }
