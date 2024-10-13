import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/FilterSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
