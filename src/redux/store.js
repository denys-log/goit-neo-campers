import { configureStore } from '@reduxjs/toolkit';

import catalogSlice from './catalogSlice';
// import filtersSlice from './filtersSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    // filters: filtersSlice,
  },
});
