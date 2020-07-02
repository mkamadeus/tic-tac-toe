import React, { useState } from "react";

const useTicTacToe = () => {
  const [board, setBoard] = useState([
    ["X", "", ""],
    ["", "Y", ""],
    ["", "", "Z"],
  ]);

  const checkBoardStatus = () => {
    //...
    return false;
  };

  const setTile = (row, col, tile) => {
    let tmp = board;
    tmp[row][col] += tile;
    setBoard([...tmp]);
  };

  return { board, setTile, checkBoardStatus };
};

export default useTicTacToe;
