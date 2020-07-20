import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import HomeButton from '../components/home/HomeButton';
import HomeLogo from '../components/home/HomeLogo';
import GameModal from '../components/modals/GameModal';
import {TicketContextProvider} from '../context/TicketContext';
import HomeTicket from '../components/home/HomeTicket';

const HomeScreen = (props) => {
  const {navigation} = props;
  const [visible, setVisible] = useState(false);

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
            bgcolor="#5BEE9F">
            Play
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
