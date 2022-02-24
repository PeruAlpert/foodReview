import React from 'react';
import { LogBox, I18nManager } from 'react-native';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import AppChild from './navigation/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
// console.disableYellowBox = true;
LogBox.ignoreAllLogs();
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
const persist_reducer = persistReducer(persistConfig, rootReducer);

export default function AppContainer() {
  const store = createStore(persist_reducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppChild />
      </PersistGate>
    </Provider>
  );
}
