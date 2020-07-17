import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TicTacToe from '../components/game/TicTacToe';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MenuBar from '../components/game/MenuBar';
import GameModal from '../components/modals/GameModal';
import useGame from '../hooks/GameHook';
import {BackHandler} from 'react-native';
import ConfirmationModal from '../components/modals/ConfirmationModal';
import {
  GameScreenContextProvider,
  GameScreenContext,
} from '../context/GameScreenContext';

const GameScreen = (props) => {
  const {navigation, route} = props;
  // const {turn} = useContext(GameScreenContext);

  return (
    <GameScreenContextProvider navigation={navigation} size={route.params.size}>
      <View style={styles.container}>
        <Text style={styles.turnText}>Player X Move</Text>
        <View style={styles.tttContainer}>
          <TicTacToe />
        </View>
        <MenuBar navigation={props.navigation} />
      </View>
      <ConfirmationModal />
    </GameScreenContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 15,
  },
  turnText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#aaaaaa',
  },
  tttContainer: {
    marginVertical: 20,
  },
  sizeMenu: {
    display: 'flex',
    borderWidth: 3,
    borderRadius: 2,
    paddingHorizontal: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default GameScreen;
