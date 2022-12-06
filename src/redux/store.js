import { configureStore, createSlice } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['contact'], // only navigation will be persisted
};

export const myContact = createSlice({
  name: 'contacts',
  initialState: {
    contact: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    addContact(state, action) {
      state.contact.push(action.payload);
    },
    deleteContact(state, action) {
      state.contact = [
        ...state.contact.filter(({ id }) => id !== action.payload),
      ];
    },
    setfilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, myContact.reducer);

export const { setfilter, deleteContact, addContact } = myContact.actions;

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
