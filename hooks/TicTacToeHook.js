import { useState } from "react";

const useTicTacToe = (n) => {
  const generateMatrix = (n) => {
    let matrix = [];
    for (let i = 0; i < n; i++) {
      let arr = [];
      for (let j = 0; j < n; j++) {
        arr.push(0);
      }
      matrix.push(arr);
    }
    return matrix;
  };

  const [board, setBoard] = useState(generateMatrix(n));

  const checkRow = (row, n) => {
    let sum = 0;
    let winner = 0;
    for (let col = 0; col < n; col++) {
      // console.log(board[row][col]);
      sum += board[row][col];
      // console.log(sum);
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
    updatedBoard = board;
    updatedBoard[row][col] = tile;
    setBoard([...updatedBoard]);
  };

  const resetBoard = () => {
    setBoard(generateMatrix(n));
  };
  return { board, getTile, setTile, checkBoardStatus, resetBoard };
};

export default useTicTacToe;
