import tabReducer, { setShowIndex } from '../tabSlice';

describe('tabReducerのテスト', () => {
  const initialState = {
    showIndex: 0,
  };

  test('tabのindexをセットする処理の確認', () => {
    const action = { type: setShowIndex.type, payload: 1 };
    const state = tabReducer(initialState, action);
    expect(state.showIndex).toBe(1);
  });
});
