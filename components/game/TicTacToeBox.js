import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cross from '../../assets/cross.svg';
import Nought from '../../assets/nought.svg';

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

const getBoxDisplay = (value, size) => {
  switch (value) {
    case 1:
      return <Cross width={size} height={size} />;
    case 2:
      return <Nought width={size} height={size} />;
    default:
      return null;
  }
};

const TicTacToeBox = (props) => {
  return (
    <View style={styles.boxContainer} onTouchEnd={props.onTouch}>
      <View style={styles.box}>{getBoxDisplay(props.value, props.size)}</View>
    </View>
  );
};

export default TicTacToeBox;
