import { useState } from "react";

const useTicTacToe = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const checkBoardStatus = () => {
    //...
    return false;
  };

  const setTile = (row, col, tile) => {
    let tmp = board;
    tmp[row][col] = tile;
    setBoard([...tmp]);
  };

  const resetBoard = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  };

  return { board, setTile, checkBoardStatus, resetBoard };
};

export default useTicTacToe;
