import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: '',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.ids = state.ids.includes(action.payload)
        ? state.ids.filter(id => id !== action.payload)
        : [...state.ids, action.payload];
    },
  },
});

export const selectFavorites = state => state.favorites;

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
