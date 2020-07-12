import React from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  modalHeader: {
    flex: 1,
    backgroundColor: "rgb(80,80,80)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
  modalContainer: {
    flexDirection: "column",
    backgroundColor: "rgba(180,180,180,0.9)",
    height: "40%",
    paddingBottom: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  btnCancel: {
    borderRadius: 10,
    width: 110,
    padding: 10,
    backgroundColor: "#FA8FFC",
  },
  btnLabel: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
});

const GameModal = ({ modalProps, removeModal }) => {
  return (
    <Modal visible={modalProps.show} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 25,
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader} />
          <Text style={{ flex: 3, marginHorizontal: 25 }}>
            {modalProps.text}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnCancel} onPress={removeModal}>
              <Text style={styles.btnLabel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btnCancel, backgroundColor: "#5BEE9F" }}
              onPress={modalProps.continueAction}
            >
              <Text style={styles.btnLabel}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GameModal;
