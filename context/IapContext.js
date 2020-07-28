import React, {useEffect, useState} from 'react';
import {
  purchaseUpdatedListener,
  finishTransaction,
  purchaseErrorListener,
} from 'react-native-iap';

export const IapContext = React.createContext({
  processing: false,
  setProcessing: () => {},
  activePlan: 0,
});

export const useIap = () => React.useContext(IapContext);

export const IapContextProvider = (props) => {
  // Purchase processing state
  const [processing, setProcessing] = useState(false);

  // Placeholder for functions
  let purchaseUpdateSubscription = null;
  let purchaseErrorSubscription = null;

  const processNewPurchase = async (purchase) => {
    const {productId, transactionReceipt} = purchase;

    setProcessing(true);
    console.log('Logged : ', productId, transactionReceipt);
    setProcessing(false);
  };

  useEffect(() => {
    purchaseUpdateSubscription = purchaseUpdatedListener(async (purchase) => {
      const receipt = purchase.transactionReceipt;
      if (receipt) {
        try {
          await finishTransaction(purchase);
          await processNewPurchase(purchase);
        } catch (ackError) {
          console.log('ackErr', ackErr);
        }
      }
    });

    purchaseErrorSubscription = purchaseErrorListener((error) => {
      console.log('purchaseErrorListener', error);
    });

    return () => {
      if (purchaseUpdateSubscription) {
        purchaseUpdateSubscription.remove();
        purchaseUpdateSubscription = null;
      }
      if (purchaseErrorSubscription) {
        purchaseErrorSubscription.remove();
        purchaseErrorSubscription = null;
      }
    };
  }, []);

  return (
    <IapContext.Provider
      value={{
        processing: processing,
        setProcessing: setProcessing,
        activePlan: props.planId,
      }}>
      {props.children}
    </IapContext.Provider>
  );
};
