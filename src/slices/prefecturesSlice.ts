import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const prefecturesSlice = createSlice({
  name: 'prefectures',
  initialState: {
    checkedPrefCodes: [] as number[],
  },
  reducers: {
    addPrefCode: (state, action: PayloadAction<number>) => {
      state.checkedPrefCodes.push(action.payload);
    },
    removePrefCode: (state, action: PayloadAction<number>) => {
      state.checkedPrefCodes = state.checkedPrefCodes.filter(
        (prefCode) => prefCode !== action.payload
      );
    },
  },
});

export const { addPrefCode, removePrefCode } = prefecturesSlice.actions;
export default prefecturesSlice.reducer;