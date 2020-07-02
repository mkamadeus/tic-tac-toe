import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tailwind } from "tailwind";

const TicTacToeBox = (props) => {
  // const [value, setValue] = useState("");

  return (
    <View style={styles.box} onTouchEnd={props.onTouch}>
      <Text style={styles.text}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    // aspectRatio: 1,
    borderColor: "#000",
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default TicTacToeBox;
