import { useState } from "react";

const useTicTacToe = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const checkRow = (row, n) => {
    let sum = 0;
    let winner = 0;
    for (let col = 0; col < n; col++) {
      sum += board[row][col];
    }
    if (sum === n || sum === -1 * n) {
      winner = sum === n ? 1 : 2;
    }
    return winner;
  };

  const checkCol = (col, n) => {
    let sum = 0;
    let winner = 0;
    for (let row = 0; row < n; row++) {
      sum += board[row][col];
    }
    if (sum === n || sum === -1 * n) {
      winner = sum === n ? 1 : 2;
    }
    return winner;
  };

  const checkDiag = (n, diag_no) => {
    let sum = 0;
    let winner = 0;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (diag_no === 1) {
          if (row !== col) {
            continue;
          } else {
            sum += board[row][col];
          }
        } else {
          if (col !== n - row - 1) {
            continue;
          } else {
            sum += board[row][col];
          }
        }
      }
    }
    if (sum === n || sum === -1 * n) {
      winner = sum === n ? 1 : 2;
    }
    return winner;
  };

  const checkBoardStatus = (n) => {
    for (let x = 0; x < n; x++) {
      let rowRes = checkRow(x, n);
      let colRes = checkCol(x, n);
      if (rowRes) {
        return { winner: rowRes, direction: "row", index: x };
      }

      if (colRes) {
        return { winner: colRes, direction: "column", index: x };
      }
    }
    const diagRes1 = checkDiag(n, 1);
    const diagRes2 = checkDiag(n, 2);
    if (diagRes1) {
      return { winner: diagRes1, direction: "diagonal", index: 1 };
    }
    if (diagRes2) {
      return { winner: diagRes2, direction: "diagonal", index: 2 };
    }
    return { winner: null, direction: null, index: null };
  };

  const getTile = (row, col) => {
    return board[row][col];
  };

  const setTile = (row, col, tile) => {
    let tmp = board;
    tmp[row][col] = tile;
    setBoard([...tmp]);
  };

  const resetBoard = () => {
    setBoard([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  };
  return { board, getTile, setTile, checkBoardStatus, resetBoard };
};

export default useTicTacToe;
