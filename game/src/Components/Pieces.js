import React, { useEffect, useState } from 'react';
import './GameBoard.css';
// import { func } from 'prop-types';

// crear los objetos con los valores que tendrán las piezas del juego (esta data luego se guardara en firebase)
let guidePiece = {
  name: '',
  size: '',
  orientation: ''
};
let piece1 = {
  name: 'perro1',
  size: '[1,4]',
  orientation: 'vertical'
};
let piece2 = {
  name: 'perro2',
  size: '[1,2]',
  orientation: 'vertical'
};
let piece3 = {
  name: 'perro3',
  size: 'tresCuadrado',
  orientation: 'vertical'
};
let piece4 = {
  name: 'perro4',
  size: 'seisCuadrado',
  orientation: 'vertical'
};

// hooks
export const usePieceState = () => {
  const [selectedPiece, setSelectedPiece] = useState({
    name: '',
    size: '',
    orientation: ''
  });
  useEffect(() => {
    setSelectedPiece({
      guidePiece
    });
    console.log(guidePiece);
  }, []);
  return selectedPiece;
};

// asignar valores a las piezas

const selectPiece = piece => {
  guidePiece = piece;
  console.log(guidePiece);
};

const Pieces = () => {
  const [pieceState, setPieceState] = useState(guidePiece);

  return (
    <div>
      <p>esta seleccionado la pieza: {pieceState.name}</p>
      <p>orientacion:{pieceState.orientation}</p>
      <p>tamaño:{pieceState.size}</p>
      <button
        onClick={() => {
          selectPiece(piece1);
          setPieceState(piece1);
        }}
      >
        perro1
      </button>
      <button
        onClick={() => {
          selectPiece(piece2);
          setPieceState(piece2);
        }}
      >
        perro2
      </button>
      <button
        onClick={() => {
          selectPiece(piece3);
          setPieceState(piece3);
        }}
      >
        perro3
      </button>
      <button
        onClick={() => {
          selectPiece(piece4);
          setPieceState(piece4);
        }}
      >
        perro4
      </button>
    </div>
  );
};

export default Pieces;
