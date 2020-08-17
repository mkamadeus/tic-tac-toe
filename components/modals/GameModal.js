import React, {useContext} from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native';
import BaseModal from './BaseModal';
import Board3x3 from '../../assets/3x3.svg';
import Board4x4 from '../../assets/4x4.svg';
import Board5x5 from '../../assets/5x5.svg';
import {TicketContext} from '../../context/TicketContext';
import {CommonActions, useNavigation} from '@react-navigation/native';

const GameModal = (props) => {
  const {visible, setVisible} = props;
  const {removeTicket} = useContext(TicketContext);
  const navigation = useNavigation();

  const options = [
    {
      icon: <Board3x3 />,
      text: '3x3',
      onPress: () => {
        setVisible(false);
        removeTicket(1);
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: 'Game',
                params: {size: 3},
              },
            ],
          }),
        );
        // navigation.navigate('Game', {size: 3});
      },
    },
    {
      icon: <Board4x4 />,
      text: '4x4',
      onPress: () => {
        setVisible(false);
        removeTicket(1);
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: 'Game',
                params: {size: 4},
              },
            ],
          }),
        );
      },
    },
    {
      icon: <Board5x5 />,
      text: '5x5',
      onPress: () => {
        setVisible(false);
        removeTicket(1);
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: 'Game',
                params: {size: 5},
              },
            ],
          }),
        );
      },
    },
  ];

  return (
    <BaseModal visible={visible} setVisible={setVisible}>
      <View>
        <Text style={styles.promptText}>Select board size:</Text>
        <Text style={styles.noteText}>One ticket will be used.</Text>
        <View style={styles.options}>
          {options.map((option) => {
            return (
              <BoardOptions
                board={option.icon}
                text={option.text}
                onPress={option.onPress}
                key={`${option.text}_option`}
              />
            );
          })}
        </View>
      </View>
    </BaseModal>
  );
};

const BoardOptions = (props) => {
  const {onPress, board, text} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.option}>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  promptText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
    // marginHorizontal: 10,
  },
  noteText: {
    fontFamily: 'Nunito-Light',
  },
  selectionContainer: {
    // width: '100%',
    // padding: 5,
  },
  optionContainer: {
    // padding: 5,
  },
  option: {
    // flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
    borderWidth: 0.75,
    borderColor: '#ccc',
    borderRadius: 3,
    elevation: 3,
    margin: 4,
  },
  optionTextContainer: {
    paddingVertical: 5,
  },
  optionText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    textAlign: 'right',
  },
  options: {
    marginTop: 20,
    flexDirection: 'row',
    padding: 4,
  },
});

export default GameModal;
