import React, {useContext, useEffect, useState, useCallback} from 'react';
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
import RNIap, {
  requestSubscription,
  getProducts,
  initConnection,
  consumeAllItemsAndroid,
  purchaseUpdatedListener,
  purchaseErrorListener,
  getAvailablePurchases,
} from 'react-native-iap';
import {useIap} from '../context/IapContext';

const tickets = {
  storeticket_0: {name: 'One ticket', count: 1},
  storeticket_1: {name: 'Twin tickets', count: 2},
  storeticket_2: {name: 'Quintuple tickets', count: 5},
  storeticket_3: {name: 'A bunch of tickets', count: 10},
  storeticket_4: {name: 'A pack of tickets', count: 50},
  storeticket_5: {name: 'Hundred Ticket Pack', count: 100},
};

const itemSkus = Platform.select({
  android: [
    'storeticket_0',
    'storeticket_1',
    'storeticket_2',
    'storeticket_3',
    'storeticket_4',
    'storeticket_5',
  ],
});

const ShopScreen = (props) => {
  const {navigation} = props;
  const {addTicket} = useContext(TicketContext);
  const [processing, setProcessing] = useState();
  const [products, setProducts] = useState([]);
  const [purchaseUpdate, setPurchaseUpdate] = useState(null);
  const [purchaseError, setPurchaseError] = useState(null);

  const handleProducts = useCallback(async () => {
    setProcessing(true);

    await initConnection()
      .then(async (conn) => {
        console.log(conn);
        // await consumeAllItemsAndroid();
        return await getProducts(itemSkus);
      })
      .then((products) => {
        products.map((value) => {
          return console.log(value);
        });
        setProducts(products);
        setProcessing(false);
      });
  }, [setProcessing]);

  // const handlePurchaseListener = useCallback(() => {
  //   setPurchaseUpdate((purchase) => {
  //     console.log('purchaseUpdatedListener', purchase);
  //     const receipt = purchase.transactionReceipt;
  //     if(receipt) {

  //     }
  //   });
  // });

  useEffect(() => {
    handleProducts();
    consumeAllItemsAndroid();
  }, [handleProducts]);

  const purchase = (productId) => {
    RNIap.requestPurchase(productId);
  };

  console.log(getAvailablePurchases());

  return (
    <View style={styles.shopContainer}>
      <View style={styles.contentContainer}>
        {/* <Button
          title="test"
          disabled={processing}
          onPress={() => handleProducts()}
        /> */}
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
                      .then(async (response) => {
                        console.log('Success', response);
                        addTicket(tickets[item.productId].count);
                        await consumeAllItemsAndroid();
                      })
                      .catch((err) => {
                        console.log('Fails', err);
                      });
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
