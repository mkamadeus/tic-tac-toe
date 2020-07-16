import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ShopItem from '../components/shop/ShopItem';

const tickets = [
  {name: 'One ticket', count: 1, price: 'Rp XX.XXX'},
  {name: 'Twin tickets', count: 2, price: 'Rp XX.XXX'},
  {name: 'Quintuple tickets', count: 5, price: 'Rp XX.XXX'},
  {name: 'A bunch of tickets', count: 10, price: 'Rp XX.XXX'},
];

const ShopScreen = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.shopContainer}>
      <Text style={styles.shopTitle}>Ticket Shop</Text>
      <FlatList
        data={tickets}
        renderItem={({item}) => {
          return (
            <View style={styles.shopItemContainer}>
              <ShopItem
                name={item.name}
                count={item.count}
                price={item.price}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shopContainer: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'red',
  },
  shopItemContainer: {
    marginTop: 10,
  },
  shopTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ShopScreen;
