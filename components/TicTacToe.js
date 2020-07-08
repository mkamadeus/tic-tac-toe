import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { tailwind } from "tailwind";
import TicTacToeBox from "./TicTacToeBox";
import useTicTacToe from "../hooks/TicTacToeHook";

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

const TicTacToe = (props) => {
  const {
    board,
    getTile,
    setTile,
    checkBoardStatus,
    resetBoard,
  } = useTicTacToe(props.size);

  const resetGame = () => {
    props.resetGameState();
    resetBoard();
  };

  const handleSetTile = (i, j, turn) => {
    if (getTile(i, j) !== 0) {
      props.addAlert("Invalid Move !! Click on empty space");
    } else {
      setTile(i, j, turn);
      const result = checkBoardStatus(props.size);
      console.log(result);
      if (result.winner) {
        props.handleSetWinner(result.winner);
      } else {
        props.onChangeTurn();
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
                        handleSetTile(i, j, props.turn === 1 ? 1 : -1);
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
