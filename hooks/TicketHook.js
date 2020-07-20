import React, {useEffect, useState} from 'react';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';

const useTicket = () => {
  const {getItem, setItem} = useAsyncStorage('ticket');
  const [ticket, setTicket] = useState('0');

  useEffect(() => {
    const getStorage = async () => {
      await getItem().then((data) => {
        if (data) {
          setTicket(data);
        }
        return;
      });
    };
    getStorage();
  }, []);

  useEffect(() => {
    setItem(ticket.toString()).then((data) => {
      return getItem();
    });
  }, [getItem, setItem, ticket]);

  const addTicket = async (amount) => {
    setTicket(parseInt(ticket) + amount);
  };

  const removeTicket = async (amount) => {
    setTicket(parseInt(ticket) - amount);
  };

  return [ticket, addTicket, removeTicket];
};

export default useTicket;
