import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
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

const AnimatedBox = (props) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 150,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{transform: [{scaleX: scaleAnim}, {scaleY: scaleAnim}]}}>
      {props.children}
    </Animated.View>
  );
};

const getBoxDisplay = (value, size) => {
  switch (value) {
    case 1:
      return (
        <AnimatedBox>
          <Cross width={size} height={size} />
        </AnimatedBox>
      );
    case 2:
      return (
        <AnimatedBox>
          <Nought width={size} height={size} />
        </AnimatedBox>
      );
    default:
      return null;
  }
};

const TicTacToeBox = (props) => {
  const {row, col, boardSize} = props;
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 600,
      delay:
        row * (50 - (boardSize - 3) * 10) * boardSize +
        col * (50 - (boardSize - 3) * 10),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...styles.boxContainer,
        transform: [{scaleX: scaleAnim}, {scaleY: scaleAnim}],
      }}
      onTouchEnd={props.onTouch}>
      <View style={styles.box}>{getBoxDisplay(props.value, props.size)}</View>
    </Animated.View>
  );
};

export default TicTacToeBox;
