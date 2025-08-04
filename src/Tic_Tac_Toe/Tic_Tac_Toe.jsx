import React, { useEffect, useRef, useState } from "react";
import "./Tic_Tac_Toe.css";

const winCases = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8],
];

const checkWinner = (arr) => {
  for (let i = 0; i < winCases.length; i++) {
    const [one, two, three] = winCases[i];
    if (arr[one] === arr[two] && arr[two] === arr[three]) {
      return arr[one];
    }
  }
  return null;
};

function Tic_Tac_Toe() {
  const [game, setGame] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);


  const handleClick = (idx) => {
    if (game[idx] || winner) return;
    const newGame = game.map((cell, i) => {
      if (i === idx) return currentPlayer;
      return cell;
    });
    setGame(newGame);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleRestart = () => {
    setGame(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  const isDraw = game.every((cell) => cell !== null);

  useEffect(() => {
    setWinner(checkWinner(game));
  }, [game]);

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <h3>Current Player: {currentPlayer === "X" ? "X" : "O"}</h3>
      {winner ? (
        <h3>Winner: {winner === "X" ? "X" : "O"}</h3>
      ) : isDraw ? (
        <h3>It's a Draw</h3>
      ) : null}
      <div className="big-box">
        {game.map((cell, i) => (
          <div
            key={`${i}`}
            className="sub-box"
            onClick={() => handleClick(i)}>
            {cell}
          </div>
        ))}
      </div>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default Tic_Tac_Toe;