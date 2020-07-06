import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { tailwind } from "tailwind";
import TicTacToeBox from "./TicTacToeBox";
import useTicTacToe from "../hooks/TicTacToeHook";

const TicTacToe = (props) => {
  const {
    board,
    getTile,
    setTile,
    checkBoardStatus,
    resetBoard,
  } = useTicTacToe();

  const resetGame = () => {
    props.resetGameState();
    resetBoard();
  };

  const handleSetTile = (i, j, turn) => {
    if (getTile(i, j) !== 0) {
      props.addAlert("Invalid Move !! Click on empty space");
    } else {
      setTile(i, j, turn);
      const result = checkBoardStatus(4);
      if (result.winner) {
        props.handleSetWinner(result.winner);
      } else {
        props.onChangeTurn();
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // aspectRatio: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          aspectRatio: 1,
          overflow: "hidden",
        }}
      >
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
      <Button title="meong" onPress={resetGame} />
    </View>
  );
};
export default TicTacToe;
