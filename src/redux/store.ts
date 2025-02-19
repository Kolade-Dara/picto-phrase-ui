import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import puzzleReducer from './slices/puzzleSlice';

const store =  configureStore({
  reducer: {
    auth: authReducer,
    puzzles: puzzleReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
