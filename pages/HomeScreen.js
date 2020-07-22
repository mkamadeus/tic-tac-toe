import React, {useState, useContext} from 'react';
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

  return (
    <View style={styles.homeContainer}>
      <HomeTicket />
      <View style={styles.logoContainer}>
        <HomeLogo />
      </View>
      <View style={styles.homeButtonContainer}>
        <View style={styles.buttonContainer}>
          <HomeButton
            onPress={() => {
              setVisible(true);
            }}
            disabled={ticket <= 0}
            bgcolor={`${ticket > 0 ? '#5BEE9F' : '#ccebdb'}`}>
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
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    marginBottom: 40,
  },
  homeButtonContainer: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    marginBottom: 15,
  },
});

export default HomeScreen;
