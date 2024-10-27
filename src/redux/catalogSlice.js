import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './catalogOps';

const initialState = {
  data: null,
  isLoading: true,
  isLoadingMore: false,
  isLoadMoreAvailable: true,
  error: null,
  currentPage: 1,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCatalog.pending, state => {
        if (!state.data?.items) {
          state.isLoading = true;
        } else {
          state.isLoadingMore = true;
        }
        state.error = null;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoadingMore = false;
        state.error = null;
        if (state.data?.items) {
          state.data = {
            total: action.payload.total,
            items: [...state.data.items, ...action.payload.items],
          };
        } else {
          state.data = action.payload;
        }
        if (state.data.items.length >= state.data.total) {
          state.isLoadMoreAvailable = false;
        }
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoadingMore = false;
        state.error = action.payload;
      });
  },
});

export const catalogActions = catalogSlice.actions;
export default catalogSlice.reducer;
