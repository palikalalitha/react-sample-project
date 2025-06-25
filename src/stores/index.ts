import React from 'react';
import CounterStore from './CounterStore';

export const stores = {
  counterStore: new CounterStore(),
};

export const StoreContext = React.createContext(stores);

export const useStores = () => React.useContext(StoreContext);
