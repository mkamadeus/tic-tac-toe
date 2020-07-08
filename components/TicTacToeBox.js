import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tailwind } from "tailwind";
import Cross from "../assets/cross.svg";
import Nought from "../assets/nought.svg";

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // aspectRatio: 1,
    padding: 5,
  },
  box: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eee",
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

const getBoxDisplay = (value) => {
  switch (value) {
    case 1:
      return <Cross width={50} height={50} />;
    case -1:
      return <Nought width={50} height={50} />;
    default:
      return null;
  }
};

const TicTacToeBox = (props) => {
  return (
    <View style={styles.boxContainer} onTouchEnd={props.onTouch}>
      <View style={styles.box}>{getBoxDisplay(props.value)}</View>
    </View>
  );
};

export default TicTacToeBox;
