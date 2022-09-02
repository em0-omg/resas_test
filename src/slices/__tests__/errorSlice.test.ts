import errorReducer, { setError, clearError } from '../errorSlice';

describe('errorReducerのテスト', () => {
  let initialState = {
    isError: false,
    message: '',
  };

  test('エラーをセットする処理の確認', () => {
    const action = { type: setError.type, payload: 'エラーです' };
    const state = errorReducer(initialState, action);
    expect(state.isError).toBeTruthy();
    expect(state.message).toBe('エラーです');
  });

  test('エラーをクリアする処理の確認', () => {
    initialState = {
      isError: true,
      message: 'エラーです',
    };
    const action = { type: clearError.type };
    const state = errorReducer(initialState, action);
    expect(state.isError).toBeFalsy();
    expect(state.message).toBe('');
  });
});
