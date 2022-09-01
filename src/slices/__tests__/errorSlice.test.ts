import errorReducer from '../errorSlice';
import { setError, clearError } from '../errorSlice';

describe('errorReducerのテスト', () => {
  const initialStateNotError = {
    isError: false,
    message: '',
  };

  const initialStateError = {
    isError: true,
    message: 'エラーです',
  };

  test('エラーをセットする処理の確認', () => {
    const action = { type: setError.type, payload: 'エラーです' };
    const state = errorReducer(initialStateNotError, action);
    expect(state.isError).toBeTruthy();
    expect(state.message).toBe('エラーです');
  });

  test('エラーをクリアする処理の確認', () => {
    const action = { type: clearError.type };
    const state = errorReducer(initialStateError, action);
    expect(state.isError).toBeFalsy();
    expect(state.message).toBe('');
  });
});
