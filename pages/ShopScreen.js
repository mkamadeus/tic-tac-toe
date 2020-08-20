import React, {useContext, useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, FlatList, Platform} from 'react-native';
import ShopItem from '../components/shop/ShopItem';
import {TicketContext} from '../context/TicketContext';
import RNIap, {
  getProducts,
  initConnection,
  consumeAllItemsAndroid,
} from 'react-native-iap';

const tickets = {
  'com.mkamadeus.item0': {name: 'Five tickets', count: 5},
  'com.mkamadeus.item1': {name: 'Ten tickets', count: 10},
  'com.mkamadeus.item3': {name: 'Twenty five tickets', count: 25},
  'com.mkamadeus.item4': {name: 'Sixty tickets', count: 60},
  // storeticket_4: {name: 'A pack of tickets', count: 50},
  // storeticket_5: {name: 'Hundred Ticket Pack', count: 100},
};

const itemSkus = Platform.select({
  android: [
    'com.mkamadeus.item0',
    'com.mkamadeus.item1',
    'com.mkamadeus.item3',
    'com.mkamadeus.item4',
    // 'storeticket_4',
    // 'storeticket_5',
  ],
});

const ShopScreen = (props) => {
  // const {navigation} = props;
  const {addTicket} = useContext(TicketContext);
  const [products, setProducts] = useState([]);

  const handleProducts = useCallback(async () => {
    await initConnection()
      .then(async (conn) => {
        // console.log(conn);r
        return await getProducts(itemSkus);
      })
      .then((products) => {
        setProducts(products);
      });
  }, [setProducts]);

  useEffect(() => {
    handleProducts();
    consumeAllItemsAndroid();
  }, [handleProducts]);

  return (
    <View style={styles.shopContainer}>
      <View style={styles.contentContainer}>
        <FlatList
          data={products}
          renderItem={({item}) => {
            return (
              <View style={styles.shopItemContainer}>
                <ShopItem
                  name={tickets[item.productId].name}
                  count={tickets[item.productId].count}
                  price={item.localizedPrice}
                  onPress={async () => {
                    await RNIap.requestPurchase(item.productId)
                      .then((response) => {
                        console.log('Success', response);
                        addTicket(tickets[item.productId].count);
                      })
                      .catch((err) => {
                        console.log('Fails', err);
                      })
                      .finally(async (err) => {
                        await consumeAllItemsAndroid();
                        return;
                      });
                  }}
                />
              </View>
            );
          }}
          numColumns={2}
          keyExtractor={(item) => item.productId}
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
    flex: 1,
    aspectRatio: 1,
    margin: 5,
    // marginTop: 5,
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
