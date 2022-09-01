import loadingReducer from '../loadingSlice';
import { setIsLoading } from '../loadingSlice';

describe('loadingReducerのテスト', () => {
  let initialState = {
    isLoading: false,
  };

  test('ローディング中に切り替わることの確認', () => {
    const action = { type: setIsLoading.type, payload: true };
    const state = loadingReducer(initialState, action);
    expect(state.isLoading).toBeTruthy();
  });

  test('ローディングが終了することの確認', () => {
    initialState = {
      isLoading: true,
    };
    const action = { type: setIsLoading.type, payload: false };
    const state = loadingReducer(initialState, action);
    expect(state.isLoading).toBeFalsy();
  });
});
