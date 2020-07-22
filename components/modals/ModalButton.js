import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 999,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 18,
  },
});

const ModalButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{...styles.button, backgroundColor: props.backgroundColor}}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default ModalButton;
