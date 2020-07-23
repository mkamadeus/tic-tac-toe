import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTicketAlt} from '@fortawesome/free-solid-svg-icons';

const ShopItem = (props) => {
  const {name, count, price, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.shopItemContainer}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faTicketAlt} size={30} color={'#FA8FFC'} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>
            {name} ({count})
          </Text>
          <Text style={styles.itemCount}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shopItemContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemCount: {
    color: '#aaa',
  },
  iconContainer: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 2,
  },
  textContainer: {
    flex: 4,
    padding: 5,
  },
});

export default ShopItem;
