import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {GameScreenContext} from '../../context/GameScreenContext';

const styles = StyleSheet.create({
  menuBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#5BE5EE',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MenuBar = (props) => {
  const {navigation, showConfirmationModal, hideConfirmationModal} = useContext(
    GameScreenContext,
  );

  const menus = [
    {
      icon: (
        <FontAwesomeIcon
          icon={require('@fortawesome/free-solid-svg-icons/faHome').faHome}
          size={35}
          color="#53BCD3"
        />
      ),
      name: 'Home',
      message:
        'By going to the home screen, the ticket you used will not be returned. Are you sure?',
      rightButtonFunction: function () {
        navigation.navigate('Home');
      },
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={require('@fortawesome/free-solid-svg-icons/faHome').faHome}
          size={35}
          color="#53BCD3"
        />
      ),
      name: 'Tickets',
      message:
        'By going to the shop, the ticket you used will not be returned. Are you sure?',
      navigateTo: 'Shop',
      rightButtonFunction: function () {
        navigation.navigate('Shop');
      },
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={require('@fortawesome/free-solid-svg-icons/faHome').faHome}
          size={35}
          color="#53BCD3"
        />
      ),
      name: 'Restart',
      message:
        'By restarting the game, the ticket you used will not be returned. Are you sure?',
      navigateTo: 'Game',
      rightButtonFunction: function () {
        navigation.navigate('Game');
      },
    },
  ];

  return (
    <>
      <View style={styles.menuBarContainer}>
        {menus.map((menu) => (
          <TouchableOpacity
            key={menu.name}
            style={styles.menu}
            onPress={() => {
              showConfirmationModal(
                hideConfirmationModal,
                menu.rightButtonFunction,
                menu.message,
              );
            }}>
            {menu.icon}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default MenuBar;
