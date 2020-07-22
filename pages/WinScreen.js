import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Cross from '../assets/cross.svg';
import Nought from '../assets/nought.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GameButton from '../components/partials/GameButton';
import {CommonActions} from '@react-navigation/native';

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
      <View style={styles.actionContainer}>
        <View>
          <Text style={styles.winText}>Player {winner} won!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <GameButton
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    {
                      name: 'Home',
                    },
                  ],
                }),
              );
            }}
            bgcolor="#5BEE9F">
            Home
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
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    width: '100%',
  },
  winText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionContainer: {
    flex: 1,
    marginTop: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});

export default WinScreen;
