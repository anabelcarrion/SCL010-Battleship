import React, {useEffect, useState } from 'react';
import './GameBoard.css';
import { func } from 'prop-types';

//creando los objeto con los valores que tendran las piezas del juego(esta data luego se guardara en firebase)  
let guidePiece={
    name:"",
    size: "",
    orientation:""  
}
let piece1={
    name:"perro1",
    size: "unCuadrado",
    orientation:"vertical"
}
let  piece2={
    name:"perro2",
    size: "dosCuadrado",
    orientation:"vertical"
}
let  piece3={
    name:"perro3",
    size: "tresCuadrado",
    orientation:"vertical"
}
let  piece4={
    name:"perro4",
    size: "seisCuadrado",
    orientation:"vertical"
}
    
//hooks
export function usePieceState(){

    const [selectedPiece, setSelectedPiece]=useState({
        name:"",
        size: "",
        orientation:""
    });
    useEffect(()=>{
        setSelectedPiece({
            guidePiece      
        })
        console.log(guidePiece);
    },[])
    return selectedPiece;
}

//funcion que asigna los valores de las piezas

function selectPiece (piece){
    guidePiece=piece;
 console.log(guidePiece)
}

export default  function Pieces (){ 
    const[pieceState,setPieceState] = useState(guidePiece);

    return (
        <div className="container-pieces">
            <p>Pieza: {pieceState.name}</p>
            <p>Orientacion:{pieceState.orientation}</p>
            <p>Tamaño:{pieceState.size}</p>
            <button onClick={()=>{selectPiece(piece1);setPieceState(piece1)}}>perro1</button> 
            <button onClick={()=>{selectPiece(piece2);setPieceState(piece2)}}>perro2</button>
            <button onClick={()=>{selectPiece(piece3);setPieceState(piece3)}}>perro3</button>
            <button onClick={()=>{selectPiece(piece4);setPieceState(piece4)}}>perro4</button>
        </div>
    )    
}