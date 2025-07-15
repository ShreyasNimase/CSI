import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import boardsReducer from './boardsSlice';
import listsReducer from './listsSlice';
import cardsReducer from './cardsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['boards', 'lists', 'cards'],
};

const rootReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  cards: cardsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;