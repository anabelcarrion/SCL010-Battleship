import React, { useState, useContext } from 'react';
//import { usePieceState } from './Pieces';
import './GameBoard.css';
import ShowPieces from './Pieces';
import firebase from '../data/firebase'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { PlacingPiecesContext } from '../Views/PlacingPieces';

//creando context para GameBorad
export const GameBoardPaintContext=React.createContext();
//creando context para piezas
export const PiecesContext=React.createContext();
// crear los objetos con los valores que tendrán las piezas del juego
let pieces={
  dog1:{
    name: 'dog1',
    img:'',
    sizeHorizontal:1,
    sizeVertical:1,
    orientation: 'vertical',
    isPlaced:false 
  },
  dog2:{
    name: 'dog2',
    img:'',
    sizeHorizontal:1,
    sizeVertical:1,
    orientation: 'vertical',
    isPlaced:false 
  },
  dog3:{
    name: 'dog3',
    img:'',
    sizeHorizontal:1,
    sizeVertical:2,
    orientation: 'vertical',
    isPlaced:false 
  },
  dog4:{
    name: 'dog4',
    img:'',
    sizeHorizontal:1,
    sizeVertical:2,
    orientation: 'vertical',
    isPlaced:false 
  },
  dog5:{
    name: 'dog5',
    img:'',
    sizeHorizontal:1,
    sizeVertical:3,
    orientation: 'vertical',
    isPlaced:false 
  },
  dog6:{
    name: 'dog6',
    img:'',
    sizeHorizontal:2,
    sizeVertical:2,
    orientation: 'vertical',
    isPlaced:false
  },
  dog7:{
    name: 'dog7',
    img:'',
    sizeHorizontal:2,
    sizeVertical:2,
    orientation: 'vertical',
    isPlaced:false
  }
}


// tablero
const CreateGameBoard = () => {

  let emptyPiece = {
    name: '',
    img:'',
    sizeHorizontal:0,
    sizeVertical:0,
    orientation: '',
    isPlaced:false   
  }  

  // fijar tamaño de tabla
  let tableHeight = 10;
  let tableWidth =10;
  let table = [];

  // creando la tabla
  for (let h = 0; h < tableHeight; h++) {
    let row = [];
    for (let w = 0; w < tableWidth; w++) {
      row[w] = { state:false, x: h, y: w, piece:emptyPiece};
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

  //variable que se le pasa el contexto
  const gameBoardState = {selectedPiece,setSelectedPiece, pieces};

   //contexto
  const {piecesToSave,setPiecesToSave} = useContext(PlacingPiecesContext);

  //añadiendo piezas
  const addPieceToSave = (pieceToAdd, x, y) => {
    let newPieces = piecesToSave.map(x => x);
    let piece = {x:x,
                 y:y, 
                 name: pieceToAdd.name, 
                 sizeH: pieceToAdd.sizeHorizontal, 
                 sizeV: pieceToAdd.sizeVertical}
    newPieces.push(piece);
    setPiecesToSave(newPieces);

  }

  //eliminado piezas
  const removePieceToSave = (pieceToDelete) => {
    for (let i = 0; i < piecesToSave.length; i++) {
      const piece = piecesToSave[i];
      if (piece.name === pieceToDelete.name) {
        piecesToSave.splice(i,1);
        break;
      }      
    }
    setPiecesToSave(piecesToSave.map(x => x));
  }


  const copyTable = (table) =>{
    return table.map( x => {
      return x.map( y => {
        return { ...y} 
       })
     });
  }

  // marcar una celda de la tabla y cambiarla de estado
    const setPiece = (x, y) => {
    let sizeHorizontal = selectedPiece.sizeHorizontal;
    let sizeVertical = selectedPiece.sizeVertical;

    //condicion para saber si en la celda hay un perro
    let removePiece=false;
    if(tableState[x][y].piece.name === ''){ 
      if(isRotated){
        sizeHorizontal = selectedPiece.sizeVertical;
        sizeVertical = selectedPiece.sizeHorizontal;
      }
    }else{
      removePiece=true;
      removePieceToSave(tableState[x][y].piece);
      sizeHorizontal = tableState[x][y].piece.sizeHorizontal;
      sizeVertical = tableState[x][y].piece.sizeVertical;
    }

    if(selectedPiece.name === "" && !removePiece){
      return tableState;
    }

    let newTable = copyTable(tableState);

    //dibujando la tabla con la pieza
    for (let i=0; i<sizeHorizontal; i++){
      for (let j=0; j<sizeVertical; j++){
        
        if(removePiece && selectedPiece.name === ""){
           //removiendo pieza que esta colocada en el tablero 
           pieces[newTable[x+i][y+j].piece.name].isPlaced = false;
           newTable[x+i][y+j] = { state:false, x: x+i, y: y+j, piece:emptyPiece};
        }else{ 

          //validando que la pieza no se ponga en los bordes del tablero
        if((x+i)>=newTable.length || (y+j)>=newTable.length){
          alert("no hay espacio suficiente para colocar esta pieza");
          return tableState;
        }
        //validando que la pieza no se ponga sobre otra pieza
        if(tableState[x+i][y+j].state){
          alert("no se puede insertar la pieza en donde ya existe una pieza");
        return tableState;
        }
           //colocando pieza en el tablero  
        newTable[x+i][y+j] = { state:true, x: x, y: y, piece:selectedPiece};
        console.log ('newTable', newTable);
      }
      }
    }
  
    if(!removePiece){
      pieces[selectedPiece.name].isPlaced = true;
      addPieceToSave(selectedPiece, x, y);
    }
    setSelectedPiece(emptyPiece);
    console.log(newTable);
    return newTable;
  };

  const setID = position => {
    return parseInt(position.x.toString() + position.y.toString()) + 1;
  };
 
  return (
    <React.Fragment>
    <section id='gameBoard'>
      <div id='boardPlayer1'>
          {/* <ToggleButton
          value="check"
          selected={isRotated}
           onChange={() => {
            setIsRotated(!isRotated);
          }}>Rotar
        </ToggleButton> */}
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
    </section>
        <GameBoardPaintContext.Provider value={gameBoardState}>
            <ShowPieces/>
        </GameBoardPaintContext.Provider>
    </React.Fragment>
  );
};

export default CreateGameBoard;
