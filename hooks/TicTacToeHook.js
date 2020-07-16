import {useState} from 'react';

/**
 * Custom hook for TicTacToe game
 * @param {number} n The board size
 */
const useTicTacToe = (n) => {
  // Matrix for generating tic tac toe matrix
  const generateMatrix = () => {
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

  // Board state
  const [board, setBoard] = useState(generateMatrix());

  // Function for checking for any winning row
  const checkRows = () => {
    for (let row = 0; row < n; row++) {
      let winner = board[row][0];
      for (let col = 1; col < n; col++) {
        if (winner !== board[row][col]) {
          winner = -1;
          break;
        }
      }
      if (winner !== -1) {
        return winner;
      }
    }

    return undefined;
  };

  // Function for checking for any winning column
  const checkColumns = () => {
    for (let col = 0; col < n; col++) {
      let winner = board[0][col];
      for (let row = 1; row < n; row++) {
        if (winner !== board[row][col]) {
          winner = -1;
          break;
        }
      }
      if (winner !== -1) {
        return winner;
      }
    }

    return undefined;
  };

  // Function for checking for any winning diagonal
  const checkDiagonals = () => {
    let winner = board[0][0];
    for (let rc = 1; rc < n; rc++) {
      if (winner !== board[rc][rc]) {
        winner = -1;
        break;
      }
    }

    if (winner !== -1) {
      return winner;
    }

    winner = board[0][n - 1];
    for (let rc = 1; rc < n; rc++) {
      if (winner !== board[rc][n - 1 - rc]) {
        winner = -1;
        break;
      }
    }

    if (winner !== -1) {
      return winner;
    }

    return undefined;
  };

  // Check if board on a draw position
  const checkDraw = () => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  };

  // Check current board status
  const checkBoardStatus = () => {
    return checkRows() || checkColumns() || checkDiagonals();
  };

  // Get tile status
  const getTile = (row, col) => {
    return board[row][col];
  };

  // Set tile status
  const setTile = (row, col, tile) => {
    board[row][col] = tile;
    setBoard([...board]);
  };

  // Reset board
  const resetBoard = () => {
    setBoard(generateMatrix());
  };

  return {board, getTile, setTile, checkDraw, checkBoardStatus, resetBoard};
};

export default useTicTacToe;
