import { configureStore } from '@reduxjs/toolkit';
import { persistSliceReducer } from './slice';
import { carsApi } from './carsApi';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    favorite: persistSliceReducer,
    [carsApi.reducerPath]: carsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    carsApi.middleware,
  ],
});

export const persistor = persistStore(store);
