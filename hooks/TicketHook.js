import {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-community/async-storage';

const useTicket = () => {
  const {getItem, setItem} = useAsyncStorage('ticket');
  const [ticket, setTicket] = useState('10');

  useEffect(() => {
    const getStorage = async () => {
      await getItem().then((data) => {
        if (parseInt(data)) {
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
    setTicket(parseInt(ticket, 10) + amount);
  };

  const removeTicket = async (amount) => {
    setTicket(parseInt(ticket, 10) - amount);
  };

  return [ticket, addTicket, removeTicket];
};

export default useTicket;
