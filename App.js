import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tailwind } from "tailwind";
import TicTacToe from "./components/TicTacToe";

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
});

const App = () => {
  const [turn, setTurn] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [alert, setAlert] = useState(null);
  const [size, setSize] = useState(4);

  const toggleTurn = () => {
    setTurn((turn % 2) + 1);
  };

  const resetGameState = () => {
    setGameStarted(false);
    setWinner(0);
    setTurn(1);
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
          onChangeTurn={toggleTurn}
          resetGameState={resetGameState}
          handleSetWinner={(player) => setWinner(player)}
          addAlert={(message) => setAlert(message)}
          size={size}
        />
      </View>
    </View>
  );
};

export default App;
