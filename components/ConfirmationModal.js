import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BaseModal from "./BaseModal";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import ModalButton from "./ModalButton";

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
  return (
    <BaseModal {...props}>
      <View>
        <View style={styles.promptContainer}>
          <Text>{props.message}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ModalButton
            backgroundColor="#FA8FFC"
            label="Cancel"
            onPress={() => {
              props.setVisibility(false);
            }}
          />
          <ModalButton
            backgroundColor="#5BEE9F"
            label="Yes"
            onPress={() => {
              props.setVisibility(false);
              props.onAccept();
            }}
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default ConfirmationModal;
