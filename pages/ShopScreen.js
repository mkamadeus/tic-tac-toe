import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Platform,
  Alert,
  Button,
} from 'react-native';
import ShopItem from '../components/shop/ShopItem';
import {TicketContext} from '../context/TicketContext';
import {
  requestSubscription,
  getProducts,
  initConnection,
} from 'react-native-iap';
import {useIap} from '../context/IapContext';

const tickets = [
  {name: 'One ticket', count: 1, price: 'Rp XX.XXX'},
  {name: 'Twin tickets', count: 2, price: 'Rp XX.XXX'},
  {name: 'Quintuple tickets', count: 5, price: 'Rp XX.XXX'},
  {name: 'A bunch of tickets', count: 10, price: 'Rp XX.XXX'},
  {name: 'A pack of tickets', count: 50, price: 'Rp XX.XXX'},
  {name: 'Hundred Ticket Pack', count: 100, price: 'Rp XX.XXX'},
];

const itemSkus = Platform.select({
  android: ['storeticket_0'],
});

const ShopScreen = (props) => {
  const {navigation} = props;
  const {addTicket} = useContext(TicketContext);
  const {processing, setProcessing} = useIap();

  const handleSubscription = async () => {
    try {
      setProcessing(true);
      await initConnection()
        .then(async (conn) => {
          return await getProducts(itemSkus);
          // conso
        })
        .then((test) => {
          console.log(test);
        });
      await requestSubscription('storeticket_0', false);
    } catch (err) {
      setProcessing(false);
    }
  };

  return (
    <View style={styles.shopContainer}>
      <View style={styles.contentContainer}>
        <Button
          title="test"
          disabled={processing}
          onPress={() => handleSubscription()}
        />
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
    padding: 5,
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
