import React, {useState, useContext, useCallback, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import HomeButton from '../components/home/HomeButton';
import HomeLogo from '../components/home/HomeLogo';
import GameModal from '../components/modals/GameModal';
import HomeTicket from '../components/home/HomeTicket';
import {TicketContext} from '../context/TicketContext';

const HomeScreen = (props) => {
  const {navigation} = props;
  const [visible, setVisible] = useState(false);
  const {ticket} = useContext(TicketContext);
  const [lore, setLore] = useState('');

  const selectRandomLore = useCallback(() => {
    const lores = [
      'Avoid your opponent from winning by blocking them on your turn!',
      'Win by forming a full line across the board.',
      'Optimally played, a draw is very possible.',
      'See whose turn is it by looking at the top left corner.',
      'This game is called Tic Tac Toe / Noughts and Crosses.',
      'The profits of this game will be donated!',
      'Buy some tickets to play!',
    ];

    setLore(lores[Math.floor(Math.random() * lores.length)]);
  }, [setLore]);

  useEffect(() => {
    selectRandomLore();
  }, [selectRandomLore]);

  return (
    <View style={styles.homeContainer}>
      <HomeTicket />
      <View style={styles.logoContainer}>
        <HomeLogo />
      </View>
      <View style={styles.loreContainer}>
        <Text style={styles.loreTitleText}>PRO TIP</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.75,
          }}
        />
        <Text style={styles.loreText}>{lore}</Text>
      </View>
      <View style={styles.homeButtonContainer}>
        <View style={styles.buttonContainer}>
          <HomeButton
            onPress={() => {
              setVisible(true);
            }}
            disabled={ticket <= 0}
            bgcolor={`${ticket > 0 ? '#5BEE9F' : '#CCEBDB'}`}>
            {`${ticket > 0 ? 'Play' : 'Ticket required to play!'}`}
          </HomeButton>
        </View>
        <View style={styles.buttonContainer}>
          <HomeButton
            onPress={() => {
              navigation.navigate('Shop');
            }}
            bgcolor="#FA8FFC">
            Shop
          </HomeButton>
        </View>
      </View>
      <GameModal
        visible={visible}
        setVisible={setVisible}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loreContainer: {
    justifyContent: 'center',
  },
  loreTitleText: {
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
  },
  loreText: {
    fontFamily: 'Nunito-Italic',
    color: '#ccc',
    textAlign: 'center',
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    marginBottom: 40,
  },
  homeButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  buttonContainer: {
    marginTop: 15,
  },
});

export default HomeScreen;
