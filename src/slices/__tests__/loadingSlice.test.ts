import loadingReducer from '../loadingSlice';
import { setIsLoading } from '../loadingSlice';

describe('loadingReducerのテスト', () => {
  const initialStateNotLoading = {
    isLoading: false,
  };

  const initialStateLoading = {
    isLoading: true,
  };

  test('ローディング中に切り替わることの確認', () => {
    const action = { type: setIsLoading.type, payload: true };
    const state = loadingReducer(initialStateNotLoading, action);
    expect(state.isLoading).toBeTruthy();
  });

  test('ローディングが終了することの確認', () => {
    const action = { type: setIsLoading.type, payload: false };
    const state = loadingReducer(initialStateLoading, action);
    expect(state.isLoading).toBeFalsy();
  });
});
