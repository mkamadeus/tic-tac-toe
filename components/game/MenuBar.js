import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

const MenuBar = (props) => {
  const {
    setVisible,
    setMessage,
    setLeftButtonFunction,
    setRightButtonFunction,
  } = props;
  const navigation = useNavigation();

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
        props.navigation.navigate('Home');
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
        'By quitting the game, your game will not be saved and the tickets will not be returned. Are you sure?',
      rightButtonFunction: function () {
        props.navigation.navigate('Shop');
      },
    },
  ];

  return (
    <>
      <View style={styles.menuBarContainer}>
        {/* <TouchableOpacity
          style={styles.menu}
          onPress={() => {
            setLeftButtonFunction({
              func: () => {
                setVisible(false);
              },
            });
            setRightButtonFunction({
              func: () => {
                console.log('pisang 1');
                setTimeout(() => {
                  console.log('pisang 2');
                  navigation.navigate('Home');
                }, 1000);
              },
            });
            console.log('pisang 3');
            setMessage(
              'By going to the home screen, the ticket you used will not be returned. Are you sure?',
            );
            setVisible(true);
          }}>
          <FontAwesomeIcon
            icon={require('@fortawesome/free-solid-svg-icons/faHome').faHome}
            size={35}
            color="#53BCD3"
          />
        </TouchableOpacity> */}
        {menus.map((menu) => (
          <TouchableOpacity
            key={menu.name}
            style={styles.menu}
            onPress={() => {
              setLeftButtonFunction({
                func: () => {
                  setVisible(false);
                },
              });
              setRightButtonFunction({
                func: () => {
                  navigation.navigate('Home');
                },
              });
              setMessage(
                'By going to the home screen, the ticket you used will not be returned. Are you sure?',
              );
              setVisible(true);
            }}>
            {menu.icon}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

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

export default MenuBar;
