import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import loadingReducer from '@/slices/loadingSlice';
import errorReducer from '@/slices/errorSlice';
import prefectureReducer from '@/slices/prefecturesSlice';
import tabReducer from '@/slices/tabSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    error: errorReducer,
    prefectures: prefectureReducer,
    tab: tabReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
