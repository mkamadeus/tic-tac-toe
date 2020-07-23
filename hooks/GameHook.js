import {useState} from 'react';
import useTicTacToe from './TicTacToeHook';

const useGame = (size) => {
  const {
    board,
    getTile,
    setTile,
    checkBoardStatus,
    checkDraw,
    resetBoard,
  } = useTicTacToe(size);
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);

  const nextTurn = () => {
    setTurn((turn % 2) + 1);
  };

  const onTilePress = (row, column) => {
    // If board not occupied...
    if (getTile(row, column) === 0) {
      setTile(row, column, turn);

      if (!checkBoardStatus(size)) {
        // If there is no winner, check if draw, else change turn.
        if (checkDraw()) {
          console.log('pisnagasfag');
          setWinner(0);
          return;
        }
        nextTurn();
      } else {
        // ...else set winner.
        setWinner(turn);
      }
    }
  };

  return {board, turn, onTilePress, winner, resetBoard};
};

export default useGame;
