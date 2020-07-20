import React from 'react';
import useTicket from '../hooks/TicketHook';

export const TicketContext = React.createContext();

export const TicketContextProvider = (props) => {
  const [ticket, addTicket, removeTicket] = useTicket();

  return (
    <TicketContext.Provider value={{ticket, addTicket, removeTicket}}>
      {props.children}
    </TicketContext.Provider>
  );
};
