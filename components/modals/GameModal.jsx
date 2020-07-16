import React, { useContext } from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import BaseModal from "./BaseModal";
import Board3x3 from "../../assets/3x3.svg";
import Board4x4 from "../../assets/4x4.svg";
import Board5x5 from "../../assets/5x5.svg";
import { ModalContext } from "../../context/ModalContext";

const styles = StyleSheet.create({
  promptText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  selectionContainer: {
    width: "100%",
    padding: 5,
  },
  optionContainer: {
    padding: 5,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionTextContainer: {
    padding: 5,
  },
  optionText: {
    fontSize: 16,
  },
});

const BoardOptions = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.option}>
        <View style={styles.optionContainer}>{props.board}</View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const GameModal = (props) => {
  const { visible, setVisible } = useContext(ModalContext);
  const options = [
    {
      icon: <Board3x3 />,
      text: "3x3",
      onPress: () => {
        props.setVisible(false);
        props.navigation.navigate("Game", { size: 3 });
      },
    },
    {
      icon: <Board4x4 />,
      text: "4x4",
      onPress: () => {
        props.setVisible(false);
        props.navigation.navigate("Game", { size: 4 });
      },
    },
    {
      icon: <Board5x5 />,
      text: "5x5",
      onPress: () => {
        props.setVisible(false);
        props.navigation.navigate("Game", { size: 5 });
      },
    },
  ];

  return (
    <BaseModal visible={visible} setVisible={setVisible}>
      <View>
        <Text style={styles.promptText}>Select board size:</Text>
        {options.map((option) => {
          return (
            <View
              style={styles.selectionContainer}
              key={`${option.text}_option`}
            >
              <BoardOptions
                board={option.icon}
                text={option.text}
                onPress={option.onPress}
              />
            </View>
          );
        })}
      </View>
    </BaseModal>
  );
};

export default GameModal;
