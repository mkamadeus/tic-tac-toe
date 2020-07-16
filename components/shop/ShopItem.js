import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ShopItem = (props) => {
  const {name, count, price} = props;
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.shopItemContainer}>
        <Text style={styles.itemName}>
          {name} ({count})
        </Text>
        <Text style={styles.itemCount}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shopItemContainer: {
    // flex: 1,
    // flexDirection: 'row',
    padding: 20,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemCount: {
    color: '#aaa',
  },
});

export default ShopItem;
