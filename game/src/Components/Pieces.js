import React, { Component, useEffect, useState, useContext } from 'react';
import './GameBoard.css';
import {GameBoardPaintContext} from './GameBoard1';

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
  orientation: 'vertical'
};
let piece2 = {
  name: '2 cuadrados',
  img:'',
  sizeHorizontal:1,
  sizeVertical:2,
  orientation: 'vertical'
};
let piece3 = {
  name: '3 cuadrados',
  img:'',
  sizeHorizontal:1,
  sizeVertical:3,
  orientation: 'vertical'
};
let piece4 = {
  name: '4 cuadrados',
  img:'',
  sizeHorizontal:2,
  sizeVertical:2,
  orientation: 'vertical'
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
    
    <button onClick={() => {
          setSelectedPiece(piece1);        
        }}>perro1</button>
      
      <button onClick={() => {
          setSelectedPiece(piece2);        
        }}>perro2</button>

      <button onClick={() => {
          setSelectedPiece(piece3);        
        }}>perro3</button>

      <button onClick={() => {
          setSelectedPiece(piece4);        
        }}>perro4 </button>

    </div>
  );
};

export default Pieces;
