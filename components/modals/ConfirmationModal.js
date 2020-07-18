import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BaseModal from './BaseModal';
import ModalButton from './ModalButton';

const ConfirmationModal = (props) => {
  const {visible, setVisible, message, rightButtonFunction} = props;

  return (
    <BaseModal visible={visible} setVisible={setVisible}>
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
              // hideConfirmationModal();
            }}
          />
          <ModalButton
            backgroundColor="#5BEE9F"
            label="Yes"
            onPress={() => {
              setVisible(false);

              // hideConfirmationModal();
              rightButtonFunction.func();
            }}
          />
        </View>
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  promptContainer: {
    padding: 10,
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 5,
  },
});

export default ConfirmationModal;
