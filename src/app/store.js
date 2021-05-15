import { configureStore } from '@reduxjs/toolkit';
import drumReducer from '../features/drum/drumSlice';

export const store = configureStore({
  reducer: {
    drum: drumReducer,
  },
});
