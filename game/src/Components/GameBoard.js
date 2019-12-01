import React, { Component } from 'react';
import './GameBoard.css';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export default class GameBoard extends Component { 
    render() {
        //declarando tamaño de la tabla
        let tableHeight=10;
        let tableWidth=10;
        let table=[];
        
        for (let h=0; h<tableHeight; h++){
            let row =[];
            for(let w=0; w<tableWidth; w++){
                row[w]={};
            }
            table[h]=row;
        }
        console.log(table);

        return (
            <div id="gameBoard">
              <div id="boardPlayer1">
                <Paper >
                    <Table id="boardPlayer1">
                        <TableBody>
                            {table.map(row => (
                                <TableRow>
                                    {row.map(position => ( 
                                        <TableCell className="square">{position.h} {position.w}</TableCell>
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
}