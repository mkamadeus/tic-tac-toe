import React from 'react';
import useConfirmationModal from '../hooks/ConfirmationModalHook';
import useGame from '../hooks/GameHook';

export const GameScreenContext = React.createContext();

export const GameScreenContextProvider = (props) => {
  const {navigation, size, children} = props;

  const [
    visible,
    message,
    leftButtonFunction,
    rightButtonFunction,
    showConfirmationModal,
    hideConfirmationModal,
  ] = useConfirmationModal();
  const {board, turn, onTilePress, winner, resetBoard} = useGame(size);

  return (
    <GameScreenContext.Provider
      value={{
        visible,
        message,
        leftButtonFunction,
        rightButtonFunction,
        showConfirmationModal,
        hideConfirmationModal,
        board,
        turn,
        onTilePress,
        winner,
        resetBoard,
        navigation,
      }}>
      {children}
    </GameScreenContext.Provider>
  );
};
