import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    isError: false,
    message: '',
  },
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.isError = true;
    },
    clearError: (state) => {
      state.message = '';
      state.isError = false;
    },
  },
});

export const { clearError, setError } = errorSlice.actions;
export default errorSlice.reducer;
