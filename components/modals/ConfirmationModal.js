import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BaseModal from './BaseModal';
import ModalButton from './ModalButton';
import {GameScreenContext} from '../../context/GameScreenContext';

const ConfirmationModal = (props) => {
  const {
    message,
    visible,
    leftButtonFunction,
    rightButtonFunction,
    showConfirmationModal,
    hideConfirmationModal,
  } = useContext(GameScreenContext);

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
              hideConfirmationModal();
            }}
          />
          <ModalButton
            backgroundColor="#5BEE9F"
            label="Yes"
            onPress={() => {
              hideConfirmationModal();
              rightButtonFunction();
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
