import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

// const initContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
export const myContact = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },

  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
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
      state.contacts = [
        ...state.contacts.filter(({ id }) => id !== action.payload),
      ];
    },
  },
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitlist: ['contacts'],
};

export const contactsReducer = persistReducer(persistConfig, myContact.reducer);
export const { deleteContact, addContact } = myContact.actions;
