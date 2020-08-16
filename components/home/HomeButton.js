import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HomeButton = (props) => {
  const {onPress, bgcolor, disabled} = props;

  return (
    <TouchableOpacity
      style={{...styles.buttonContainer, backgroundColor: bgcolor}}
      onPress={onPress}
      disabled={disabled}
      // background={TouchableNativeFeedback.Ripple('red', false)}
    >
      <Text style={styles.buttonLabel}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 15,
    borderRadius: 5,
  },
  buttonLabel: {
    fontFamily: 'Nunito-ExtraBold',
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default HomeButton;
