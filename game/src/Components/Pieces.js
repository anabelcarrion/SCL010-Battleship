import React, {useState} from 'react';
import './GameBoard.css';

export default  function Pieces (){ 
    
    //creando el objeto que seran las piezas del juego  
    let piece0={
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

    const [selectedPiece, setSalectedPiece]=useState(piece0);

    return (
        <div>
            <p>esta seleccionado la pieza: {selectedPiece.name}</p>
            <p>orientacion:{selectedPiece.orientation}</p>
            <p>tamaño:{selectedPiece.size}</p>
            <button onClick={()=>setSalectedPiece(piece1)}>perro1</button> 
            <button onClick={()=>setSalectedPiece(piece2)}>perro2</button>
            <button onClick={()=>setSalectedPiece(piece3)}>perro3</button>
            <button onClick={()=>setSalectedPiece(piece4)}>perro4</button>
        </div>
    )    
}