import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cross from '../assets/cross.svg';
import Nought from '../assets/nought.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GameButton from '../components/partials/GameButton';

const WinScreen = (props) => {
  const {route, navigation} = props;
  const {winner} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.tileContainer}>
        {winner === 1 ? (
          <Cross width={200} height={200} />
        ) : (
          <Nought width={200} height={200} />
        )}
      </View>
      <View>
        <Text style={styles.winText}>Player {winner} won!</Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.buttonContainer}>
          <GameButton
            onPress={() => {
              navigation.navigate('Home');
            }}
            bgcolor="#5BEE9F">
            Home
          </GameButton>
        </View>
        <View style={styles.buttonContainer}>
          <GameButton
            onPress={() => {
              navigation.navigate('Game');
            }}
            bgcolor="#5BEE9F">
            Play Again
          </GameButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  winText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default WinScreen;
