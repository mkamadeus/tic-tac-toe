import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import TicTacToeBox from "./TicTacToeBox";
import useTicTacToe from "../../hooks/TicTacToeHook";
import ConfirmationModal from "./ConfirmationModal";

const styles = StyleSheet.create({
  gridAnchor: {
    flex: 1,
    flexWrap: "wrap",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: "100%",
    position: "relative",
  },
  gridContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  grid: {
    flex: 1,
    aspectRatio: 1,
    overflow: "hidden",
  },
});

const TicTacToe = ({
  navigation,
  resetClicked,
  resetGameState,
  size,
  setResetClicked,
  modal,
  setModal,
  winner,
  onChangeTurn,
  turn,
  handleSetWinner,
}) => {
  const {
    board,
    getTile,
    setTile,
    checkBoardStatus,
    resetBoard,
  } = useTicTacToe(size);

  // const backToHomeHandler = () => {
  //   navigation.navigate("Home");
  //   setModal({ show: false });
  // };

  useEffect(() => {
    if (resetClicked) {
      resetGameState();
      resetBoard();
      setResetClicked(false);
      //Kurangin tiket
    }
  }, [resetClicked]);

  const onTilePress = (i, j, turn) => {
    if (getTile(i, j) === 0) {
      setTile(i, j, turn);
      const result = checkBoardStatus(size);

      // If there is no winner, change turn
      // Else
      if (!result) {
        onChangeTurn();
      } else {
        let draw = true;
        if (result.winner > 0) {
          draw = false;
        }
        handleSetWinner(result.winner);
        setModal({
          show: true,
          text: draw ? `It's a draw` : `Player ${result.winner} wins!`,
          continueAction: () => {
            setResetClicked(true);
            setModal({ show: false });
          },
        });
      }
    }
  };

  return (
    <View style={styles.gridAnchor}>
      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {board.map((array, i) => {
            return (
              <View
                key={`row_${i}`}
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                {array.map((box, j) => {
                  return (
                    <TicTacToeBox
                      key={`row_${i} col_${j}`}
                      value={box}
                      onTouch={() => {
                        onTilePress(i, j, turn === 1 ? 1 : -1);
                      }}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};
export default TicTacToe;
