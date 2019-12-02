import React, {useState } from 'react';
import './GameBoard.css';
//import Pieces from './Components/Pieces';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export default  function GameBoard () { 
        //declarando tamaño de la tabla
        let tableHeight=10;
        let tableWidth=10;
        let table=[];
        
        //creando la tabla
        for (let h=0; h<tableHeight; h++){
            let row =[];
            for(let w=0; w<tableWidth; w++){
                row[w]={state:"true"};
            }
            table[h]=row;
        }
        
        const [tableState, setTableState]=useState(table);
    
        return (
            <div id="gameBoard">
              <div id="boardPlayer1">  
                <Paper >
                    <Table id="boardPlayer1">
                        <TableBody>
                            {tableState.map(row => (
                                <TableRow>
                                    {row.map(position => ( 
                                        <TableCell className="square" onClick>
                                            {position.state}</TableCell>
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
