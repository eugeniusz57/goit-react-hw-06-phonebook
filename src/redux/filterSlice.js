import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    setfilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setfilter } = filterSlice.actions;
