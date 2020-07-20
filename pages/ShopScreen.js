import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ShopItem from '../components/shop/ShopItem';
import {TicketContext} from '../context/TicketContext';

const tickets = [
  {name: 'One ticket', count: 1, price: 'Rp XX.XXX'},
  {name: 'Twin tickets', count: 2, price: 'Rp XX.XXX'},
  {name: 'Quintuple tickets', count: 5, price: 'Rp XX.XXX'},
  {name: 'A bunch of tickets', count: 10, price: 'Rp XX.XXX'},
];

const ShopScreen = (props) => {
  const {navigation} = props;
  const {addTicket} = useContext(TicketContext);

  return (
    <View style={styles.shopContainer}>
      <View style={styles.contentContainer}>
        <FlatList
          data={tickets}
          renderItem={({item}) => {
            return (
              <View style={styles.shopItemContainer}>
                <ShopItem
                  name={item.name}
                  count={item.count}
                  price={item.price}
                  onPress={() => {
                    addTicket(item.count);
                  }}
                />
              </View>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shopContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'red',
  },
  shopHeader: {
    elevation: 6,
    // backgroundColor: 'green',
  },
  shopItemContainer: {
    marginTop: 5,
  },
  shopTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    // marginTop: 10,
  },
});

export default ShopScreen;
