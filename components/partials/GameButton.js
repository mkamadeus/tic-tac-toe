import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const GameButton = (props) => {
  const {onPress, bgcolor} = props;

  return (
    <TouchableOpacity
      style={{...styles.buttonContainer, backgroundColor: bgcolor}}
      onPress={onPress}>
      <Text style={styles.buttonLabel}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    borderRadius: 3,
  },
  buttonLabel: {
    fontFamily: 'Nunito-ExtraBold',
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default GameButton;
