import { useState } from "react";

export default function LudoBoard(){
    let [moves, setMoves] = useState({red: 0, blue: 0, green: 0, yellow: 0 });
    console.log(moves);
    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1}
        });
    };

     let updateBlue = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1}
        });
    };

     let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1}
        });
    };

     let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        });
    };


    return (
        <div>
            <p>Red moves = {moves.red}</p>
            <button style={{backgroundColor: "red", color: "white"}} onClick={updateRed}>+1</button>
            <p>Blue moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={updateBlue}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button style={{backgroundColor: "green", color: "white"}} onClick={updateGreen}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
        </div>
    );
}