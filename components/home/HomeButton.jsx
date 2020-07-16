import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HomeButton = (props) => {
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
    padding: 20,
    borderRadius: 999,
  },
  buttonLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default HomeButton;
