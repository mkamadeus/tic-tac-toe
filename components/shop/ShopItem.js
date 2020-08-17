import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTicketAlt} from '@fortawesome/free-solid-svg-icons';

const ShopItem = (props) => {
  const {name, count, price, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.shopItemContainer}>
      <View>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faTicketAlt} size={50} color={'#FA8FFC'} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemPrice}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shopItemContainer: {
    // flexDirection: 'row',
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 3,
    borderColor: '#ccc',
    borderWidth: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontFamily: 'Nunito-ExtraBold',
    textAlign: 'center',
    // fontWeight: 'bold',
  },
  itemPrice: {
    color: '#aaa',
    fontFamily: 'Nunito-LightItalic',
    textAlign: 'center',
  },
  iconContainer: {
    flex: 2,
    // backgroundColor: 'red',
    // aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 2,
  },
  textContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    flex: 3,
    padding: 5,
  },
});

export default ShopItem;
