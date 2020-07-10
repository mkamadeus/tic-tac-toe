import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNative,
} from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    borderRadius: 999,
  },
  buttonLabel: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
  },
});

const HomeButton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer, backgroundColor: props.bgcolor }}
      onPress={props.onPress}
    >
      <Text style={styles.buttonLabel}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default HomeButton;
