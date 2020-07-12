import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tailwind } from "tailwind";
import TicTacToe from "../components/TicTacToe";
import { FontAwesome, Foundation } from "@expo/vector-icons";
import MenuBar from "../components/MenuBar";
import GameModal from "../components/GameModal";
import useGame from "../hooks/GameHook";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  turnText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#aaaaaa",
  },
  tttContainer: {
    marginVertical: 20,
  },
  sizeMenu: {
    display: "flex",
    borderWidth: 3,
    borderRadius: 2,
    paddingHorizontal: 5,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

const GameScreen = (props) => {
  const { turn, nextTurn } = useGame();
  // const [turn, setTurn] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [alert, setAlert] = useState(null);
  const [size, setSize] = useState(4);
  const [modal, setModal] = useState({ show: false });

  // const toggleTurn = () => {
  //   setTurn((turn % 2) + 1);
  // };

  const resetGameState = () => {
    setGameStarted(false);
    setWinner(null);
    setTurn(1);
  };

  const removeModal = () => {
    setModal({ show: false });
  };

  let alertBox = null;
  if (alert) {
    alertBox = (
      <Text
        style={tailwind("text-lg font-bold")}
        onPress={() => setAlert(null)}
      >
        {alert}
      </Text>
    );
  }

  return (
    <View style={tailwind("flex-1 bg-white p-6 py-12")}>
      <StatusBar style="auto" backgroundColor="#eee" />
      <Text style={styles.turnText}>Player {turn} Move</Text>
      <View style={styles.tttContainer}>
        <TicTacToe
          turn={turn}
          onChangeTurn={nextTurn}
          resetGameState={resetGameState}
          handleSetWinner={(player) => setWinner(player)}
          addAlert={(message) => setAlert(message)}
          size={size}
        />
      </View>
      <MenuBar />
      <GameModal modalProps={modal} removeModal={removeModal} />
    </View>
  );
};

export default GameScreen;
