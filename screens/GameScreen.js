import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tailwind } from "tailwind";
import TicTacToe from "../components/game/TicTacToe";
import { FontAwesome, Foundation } from "@expo/vector-icons";
import MenuBar from "../components/game/MenuBar";
import GameModal from "../components/modal/GameModal";
import useGame from "../hooks/GameHook";
import { BackHandler } from "react-native";
import { ModalContextProvider } from "../context/ModalContext";
import ConfirmationModal from "../components/modals/ConfirmationModal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 15,
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
  const [size, setSize] = useState(props.route.params.size);
  const [modal, setModal] = useState({ show: false });
  const [resetClicked, setResetClicked] = useState(false);

  const resetGameState = () => {
    setWinner(null);
    setTurn(1);
    setResetClicked(true);
    //Implementasi kurangin tiket
  };

  return (
    <ModalContextProvider>
      <View style={styles.container}>
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
            resetClicked={resetClicked}
            setResetClicked={setResetClicked}
            modal={modal}
            setModal={setModal}
            winner={winner}
            navigation={props.navigation}
          />
        </View>
        <MenuBar navigation={props.navigation} />
      </View>
      <ConfirmationModal />
    </ModalContextProvider>
  );
};

export default GameScreen;
