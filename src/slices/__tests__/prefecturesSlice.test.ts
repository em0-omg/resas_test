import prefecturesReducer from '../prefecturesSlice';
import { addPrefCode, removePrefCode } from '../prefecturesSlice';

const initialState = {
  checkedPrefCodes: [] as number[],
};

describe('prefecturesReducerのテスト', () => {
  test('prefCodeを追加する処理の確認', () => {
    // 2回分の追加処理を想定
    const action1 = { type: addPrefCode.type, payload: 1 };
    const action2 = { type: addPrefCode.type, payload: 2 };

    // 1回目の追加
    const state1 = prefecturesReducer(initialState, action1);
    expect(state1.checkedPrefCodes).toEqual([1]);

    // 2回目の追加
    const state2 = prefecturesReducer(state1, action2);
    expect(state2.checkedPrefCodes).toEqual([1, 2]);
  });
});

describe('prefCodeを削除する処理の確認', () => {
  test('空の場合は変更を加えない', () => {
    const action = { type: removePrefCode.type, payload: 1 };
    const state = prefecturesReducer(initialState, action);
    expect(state.checkedPrefCodes).toEqual([]);
  });

  test('削除対象のprefコードがない場合', () => {
    const addAction = { type: addPrefCode.type, payload: 1 };
    const addedState = prefecturesReducer(initialState, addAction);

    const removeAction = { type: removePrefCode.type, payload: 2 };
    const removedState = prefecturesReducer(addedState, removeAction);

    expect(removedState.checkedPrefCodes).toEqual([1]);
  });
  test('削除対象のprefコードがある場合', () => {
    const addAction = { type: addPrefCode.type, payload: 1 };
    const addedState = prefecturesReducer(initialState, addAction);

    const removeAction = { type: removePrefCode.type, payload: 1 };
    const removedState = prefecturesReducer(addedState, removeAction);

    expect(removedState.checkedPrefCodes).toEqual([]);
  });
});
