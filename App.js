import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tailwind } from "tailwind";
import TicTacToe from "./components/TicTacToe";

export default function App() {
  const [turn, setTurn] = useState(0);

  const toggleTurn = () => {
    setTurn((turn + 1) % 2);
  };

  return (
    <View style={tailwind("flex-1 bg-white p-6 py-12")}>
      <StatusBar style="auto" backgroundColor="teal" />
      <Text style={tailwind("text-lg font-bold")}>Player {turn + 1} Move</Text>
      <TicTacToe turn={turn} onChangeTurn={toggleTurn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
