import React, { Component, useEffect, useState, useContext } from 'react';
import './GameBoard.css';
import {GameBoardPaintContext} from './GameBoard1';

// crear los objetos con los valores que tendrán las piezas del juego
// (esta data luego se guardara en firebase)

let piece1 = {
  name: '1 cuadrado',
  img:'',
  sizeHorizontal:1,
  sizeVertical:1,
  orientation: 'vertical'
};
let piece2 = {
  name: '1 cuadrado',
  img:'',
  sizeHorizontal:1,
  sizeVertical:1,
  orientation: 'vertical'
};
let piece3 = {
  name: '2 cuadrados',
  img:'',
  sizeHorizontal:1,
  sizeVertical:2,
  orientation: 'vertical'
};
let piece4 = {
  name: '2 cuadrados',
  img:'',
  sizeHorizontal:1,
  sizeVertical:2,
  orientation: 'vertical'
};
let piece5 = {
  name: '3 cuadrados',
  img:'',
  sizeHorizontal:1,
  sizeVertical:3,
  orientation: 'vertical'
};
let piece6 = {
  name: '4 cuadrados',
  img:'',
  sizeHorizontal:2,
  sizeVertical:2,
  orientation: 'vertical'
};
let piece7 = {
  name: '4 cuadrados',
  img:'',
  sizeHorizontal:2,
  sizeVertical:2,
  orientation: 'vertical'
};


const Pieces = () => {
  
  //usando el contexto que se guardo en GameBord
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

       <button onClick={() => {
          setSelectedPiece(piece5);        
        }}>perro5 </button>
        
        <button onClick={() => {
          setSelectedPiece(piece6);        
        }}>perro6 </button>

          <button onClick={() => {
          setSelectedPiece(piece7);        
        }}>perro7 </button>
        
    </div>
  );
};

export default Pieces;
