import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TicTacToe from '../components/game/TicTacToe';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MenuBar from '../components/game/MenuBar';
import GameModal from '../components/modals/GameModal';
import useGame from '../hooks/GameHook';
import {BackHandler} from 'react-native';
import ConfirmationModal from '../components/modals/ConfirmationModal';
import useConfirmationModal from '../hooks/ConfirmationModalHook';
import Cross from '../assets/cross.svg';
import Nought from '../assets/nought.svg';

const GameScreen = (props) => {
  const {navigation, route} = props;
  const size = route.params.size;
  const [
    visible,
    setVisible,
    message,
    setMessage,
    leftButtonFunction,
    setLeftButtonFunction,
    rightButtonFunction,
    setRightButtonFunction,
  ] = useConfirmationModal();
  const {board, turn, onTilePress, winner, resetBoard} = useGame(size);

  // // Prevent user from leaving the game screen
  // useEffect(() => {
  //   navigation.addListener('beforeRemove', (event) => {
  //     event.preventDefault();
  //     return;
  //   });
  // }, [navigation]);

  useEffect(() => {
    if (winner) {
      console.log(`Player ${turn} won!`);
      navigation.navigate('Win', {winner});
    }
  }, [navigation, turn, winner]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {turn === 1 ? (
            <Cross width={40} height={40} />
          ) : (
            <Nought width={40} height={40} />
          )}
          <Text style={styles.turnText}>Player {turn} Move</Text>
        </View>
        <View style={styles.tttContainer}>
          <TicTacToe
            board={board}
            onTilePress={onTilePress}
            turn={turn}
            size={size}
          />
        </View>
      </View>
      <MenuBar
        setRightButtonFunction={setRightButtonFunction}
        setLeftButtonFunction={setLeftButtonFunction}
        setMessage={setMessage}
        setVisible={setVisible}
      />
      <ConfirmationModal
        visible={visible}
        setVisible={setVisible}
        message={message}
        setMessage={setMessage}
        rightButtonFunction={rightButtonFunction}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginVertical: 15,
  },
  turnText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
