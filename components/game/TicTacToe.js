import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import TicTacToeBox from './TicTacToeBox';

const TicTacToe = (props) => {
  const {board, onTilePress, turn} = props;
  return (
    <View style={styles.gridAnchor}>
      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {board.map((array, i) => {
            return (
              <View
                key={`row_${i}`}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                {array.map((box, j) => {
                  return (
                    <TicTacToeBox
                      key={`row_${i} col_${j}`}
                      value={box}
                      onTouch={() => {
                        onTilePress(i, j, turn);
                      }}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridAnchor: {
    flex: 1,
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '100%',
    position: 'relative',
  },
  gridContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  grid: {
    flex: 1,
    aspectRatio: 1,
    overflow: 'hidden',
  },
});

export default TicTacToe;
