import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    isError: false,
    message: '',
  },
  reducers: {
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setIsError, setErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
