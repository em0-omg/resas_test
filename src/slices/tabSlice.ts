import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    showIndex: 0,
  },
  reducers: {
    setShowIndex: (state, action: PayloadAction<number>) => {
      state.showIndex = action.payload;
    },
  },
});

export const { setShowIndex } = tabSlice.actions;
export default tabSlice.reducer;
