import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const prefecturesSlice = createSlice({
  name: 'prefectures',
  initialState: {
    checkedPrefCodes: [] as number[],
  },
  reducers: {
    addPrefCode: (state, action: PayloadAction<number>) => {
      state.checkedPrefCodes.push(action.payload);
      // 念の為重複を削除
      state.checkedPrefCodes = [...new Set(state.checkedPrefCodes)];
    },
    removePrefCode: (state, action: PayloadAction<number>) => {
      state.checkedPrefCodes = state.checkedPrefCodes.filter(
        (prefCode) => prefCode !== action.payload
      );
    },
    clearCodes: (state) => {
      state.checkedPrefCodes = [];
    },
  },
});

export const { addPrefCode, removePrefCode, clearCodes } =
  prefecturesSlice.actions;
export default prefecturesSlice.reducer;
