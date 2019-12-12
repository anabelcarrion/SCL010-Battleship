import React, { Component, useEffect, useState, useContext } from 'react';
import './GameBoard.css';
import {GameBoardPaintContext} from './GameBoard1';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';


// asignar valores a las piezas
const ShowPieces = () => {
  const {selectedPiece,setSelectedPiece,pieces} = useContext(GameBoardPaintContext);
  return (
    <div>
    <ButtonGroup
              variant="text"
              color="primary"
              aria-label="full-width contained primary button group"
            >
       <Button disabled={pieces.dog1.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog1);   
        }}>perro1</Button>
      
        <Button disabled={pieces.dog2.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog2);   
        }}>perro2</Button>

        <Button disabled={pieces.dog3.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog3);   
        }}>perro3</Button>

        <Button disabled={pieces.dog4.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog4);   
        }}>perro4</Button>

        <Button disabled={pieces.dog5.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog5);   
        }}>perro5</Button>
        
        <Button disabled={pieces.dog6.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog6);   
        }}>perro6</Button>

        <Button disabled={pieces.dog7.isPlaced} onClick={() => {
          setSelectedPiece(pieces.dog7);   
        }}>perro7</Button>
      </ButtonGroup> 
    </div>
  );
};

export default ShowPieces;
