import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BaseModal from "./BaseModal";
import ModalButton from "./ModalButton";
import { ModalContext } from "../../context/ModalContext";

const styles = StyleSheet.create({
  promptContainer: {
    padding: 10,
  },
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    padding: 5,
  },
});

const ConfirmationModal = (props) => {
  const {
    message,
    visible,
    setVisible,
    leftButtonFunction,
    rightButtonFunction,
    setLeftButtonFunction,
    setRightButtonFunction,
  } = useContext(ModalContext);

  return (
    <BaseModal visible={visible}>
      <View>
        <View style={styles.promptContainer}>
          <Text>{message}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ModalButton
            backgroundColor="#FA8FFC"
            label="Cancel"
            onPress={() => {
              setVisible(false);
              leftButtonFunction();
            }}
          />
          <ModalButton
            backgroundColor="#5BEE9F"
            label="Yes"
            onPress={() => {
              setVisible(false);
              rightButtonFunction();
            }}
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default ConfirmationModal;
