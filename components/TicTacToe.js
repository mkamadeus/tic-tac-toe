import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { tailwind } from "tailwind";
import TicTacToeBox from "./TicTacToeBox";
import useTicTacToe from "../hooks/TicTacToeHook";

const TicTacToe = (props) => {
  const { board, setTile, checkBoardStatus, resetBoard } = useTicTacToe();

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
                      setTile(i, j, props.turn === 0 ? "x" : "o");
                      props.onChangeTurn();
                    }}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
      <Button title="meong" onPress={resetBoard} />
    </View>
  );
};

export default TicTacToe;
