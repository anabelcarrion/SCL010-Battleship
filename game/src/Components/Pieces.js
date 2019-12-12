import React, { Component, useEffect, useState, useContext } from 'react';
import './GameBoard.css';
import {GameBoardPaintContext} from './CreateGameBoard';
import Button from '@material-ui/core/Button';


// asignar valores a las piezas
const ShowPieces = () => {
  const {selectedPiece,setSelectedPiece,pieces} = useContext(GameBoardPaintContext);
  return (
    <section id="dog-btns">
       <Button disabled={pieces.dog1.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog1);   
        }}><i class="fas fa-dog"> 1 </i></Button>
      
        <Button disabled={pieces.dog2.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog2);   
        }}><i class="fas fa-dog"> 1 </i></Button>

        <Button disabled={pieces.dog3.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog3);   
        }}><i class="fas fa-dog"></i> 2 </Button>

        <Button disabled={pieces.dog4.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog4);   
        }}><i class="fas fa-dog"></i> 2 </Button>

        <Button disabled={pieces.dog5.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog5);   
        }}><i class="fas fa-dog"></i> 3 </Button>
        
        <Button disabled={pieces.dog6.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog6);   
        }}><i class="fas fa-dog"></i> 4 </Button>

        <Button disabled={pieces.dog7.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog7);   
        }}><i class="fas fa-dog"></i> 4 </Button>
    </section>
  );
};

export default ShowPieces;
