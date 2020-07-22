import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TicketContext} from '../../context/TicketContext';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTicketAlt} from '@fortawesome/free-solid-svg-icons';

const HomeTicket = () => {
  const navigation = useNavigation();
  const {ticket} = useContext(TicketContext);
  return (
    <View style={styles.homeTicketContainer}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faTicketAlt} size={20} color={'#FFF'} />
      </View>
      <View style={styles.ticketInfoContainer}>
        <Text style={styles.ticketText}>{ticket}</Text>
        <TouchableOpacity
          title="+"
          onPress={() => {
            navigation.navigate('Shop');
          }}>
          <Text style={styles.ticketText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeTicketContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 999,
    width: 110,
    backgroundColor: '#5BEE9F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 3,
    paddingHorizontal: 10,
  },
  ticketText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
    padding: 2,
  },
  iconContainer: {
    flex: 1,
    padding: 5,
  },
  ticketInfoContainer: {
    borderRadius: 999,
    backgroundColor: '#48BB7D',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 5,
    marginVertical: 5,
    flex: 2,
  },
});

export default HomeTicket;
