import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchItems',
  async ({ page, limit, location, type, ...equipments }, thunkAPI) => {
    try {
      const response = await axios.get('/campers', {
        params: {
          page,
          limit,
          ...(location && { search: location }),
          ...(type && { form: type }),
          ...equipments,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
