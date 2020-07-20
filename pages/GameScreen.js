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

  useEffect(() => {
    if (winner) {
      console.log(`Player ${turn} won!`);
      navigation.navigate('Win', {winner});
    }
  }, [navigation, turn, winner]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.turnText}>Player {turn} Move</Text>
        <View style={styles.tttContainer}>
          <TicTacToe board={board} onTilePress={onTilePress} turn={turn} />
        </View>
        <MenuBar
          setRightButtonFunction={setRightButtonFunction}
          setLeftButtonFunction={setLeftButtonFunction}
          setMessage={setMessage}
          setVisible={setVisible}
        />
      </View>
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
