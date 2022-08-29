import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import loadingReducer from '@/slices/loadingSlice';
import errorReducer from '@/slices/errorSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    error: errorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
