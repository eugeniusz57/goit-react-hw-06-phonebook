import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

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
    addContact: {
      reducer(state, action) {
        state.contact.push(action.payload);
      },
      prepare(date) {
        return {
          payload: {
            id: nanoid(),
            ...date,
          },
        };
      },
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

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['contact'],
};

export const contactsReducer = persistReducer(persistConfig, myContact.reducer);
export const { setfilter, deleteContact, addContact } = myContact.actions;
