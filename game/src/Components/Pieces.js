import React, { Component, useEffect, useState, useContext } from 'react';
import './GameBoard.css';
import {GameBoardPaintContext} from './GameBoard1';
import Button from '@material-ui/core/Button';


// crear los objetos con los valores que tendrán las piezas del juego (esta data luego se guardara en firebase)
let guidePiece = {
  name: '',
  img:'',
  size: '',
  orientation: ''
};
let piece1 = {
  name: '1 cuadrado',
  img:'',
  sizeHorizontal:1,
  sizeVertical:1,
  orientation: 'vertical',
  isPlaced:false 
};
let piece2 = {
  name: '1 cuadrado',
  img:'',
  sizeHorizontal:1,
  sizeVertical:1,
  orientation: 'vertical',
  isPlaced:false 
};
let piece3 = {
  name: '2 cuadrados',
  img:'',
  sizeHorizontal:1,
  sizeVertical:2,
  orientation: 'vertical',
  isPlaced:false 
};
let piece4 = {
  name: '2 cuadrados',
  img:'',
  sizeHorizontal:1,
  sizeVertical:2,
  orientation: 'vertical',
  isPlaced:false 
};
let piece5 = {
  name: '3 cuadrados',
  img:'',
  sizeHorizontal:1,
  sizeVertical:3,
  orientation: 'vertical',
  isPlaced:false 
};
let piece6 = {
  name: '4 cuadrados',
  img:'',
  sizeHorizontal:2,
  sizeVertical:2,
  orientation: 'vertical',
  isPlaced:false
};
let piece7 = {
  name: '4 cuadrados',
  img:'',
  sizeHorizontal:2,
  sizeVertical:2,
  orientation: 'vertical',
  isPlaced:false
};

// asignar valores a las piezas

const selectPiece = piece => {
  guidePiece = piece;
  console.log(guidePiece);
};

const Pieces = () => {
  const {selectedPiece,setSelectedPiece} = useContext(GameBoardPaintContext);

  
  return (
    <div>
    <p>esta seleccionado la pieza: {selectedPiece.name}</p>
    <p>orientacion:{selectedPiece.orientation}</p>
    <p>tamaño:{selectedPiece.sizeHorizontal}x{selectedPiece.sizeVertical}</p>
    
    <Button disabled={piece1.isPlaced} onClick={() => {
          setSelectedPiece(piece1);   
          piece1.isPlaced=true;     
        }}>perro1</Button>
      
      <Button disabled={piece2.isPlaced}  onClick={() => {
          setSelectedPiece(piece2); 
          piece2.isPlaced=true;        
        }}>perro2</Button>

      <Button disabled={piece3.isPlaced}  onClick={() => {
          setSelectedPiece(piece3); 
          piece3.isPlaced=true;        
        }}>perro3</Button>

      <Button disabled={piece4.isPlaced}  onClick={() => {
          setSelectedPiece(piece4); 
          piece4.isPlaced=true;        
        }}>perro4 </Button>

       <Button disabled={piece5.isPlaced}  onClick={() => {
          setSelectedPiece(piece5); 
          piece5.isPlaced=true;       
        }}>perro5 </Button>
        
        <Button disabled={piece6.isPlaced}  onClick={() => {
          setSelectedPiece(piece6);
          piece6.isPlaced=true;         
        }}>perro6 </Button>

        <Button disabled={piece7.isPlaced}  onClick={() => {
          setSelectedPiece(piece7); 
          piece7.isPlaced=true;        
        }}>perro7 </Button>
        
    </div>
  );
};

export default Pieces;
