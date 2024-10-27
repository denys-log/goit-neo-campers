import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import catalogSlice from './catalogSlice';
import favoritesSlice from './favoritesSlice';
import camperSlice from './camperSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['register'],
};

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    camper: camperSlice,
    favorites: persistReducer(persistConfig, favoritesSlice),
  },
});

export const persistor = persistStore(store);
