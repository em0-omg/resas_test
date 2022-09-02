import prefecturesReducer, {
  addPrefCode,
  removePrefCode,
} from '../prefecturesSlice';

describe('prefecturesReducerのテスト', () => {
  let initialState = {
    checkedPrefCodes: [1] as number[],
  };

  test('空の場合にprefCodeを追加する処理の確認', () => {
    const action = { type: addPrefCode.type, payload: 1 };
    const state = prefecturesReducer(initialState, action);
    expect(state.checkedPrefCodes).toEqual([1]);
  });

  test('既に中身がある場合に重複したprefCodeを追加する処理の確認', () => {
    initialState = {
      checkedPrefCodes: [1, 2, 3],
    };
    const action = { type: addPrefCode.type, payload: 1 };
    const state = prefecturesReducer(initialState, action);
    expect(state.checkedPrefCodes).toEqual([1, 2, 3]);
  });

  test('既に中身がある場合に新しいprefCodeを追加する処理の確認', () => {
    initialState = {
      checkedPrefCodes: [1, 2, 3],
    };
    const action = { type: addPrefCode.type, payload: 4 };
    const state = prefecturesReducer(initialState, action);
    expect(state.checkedPrefCodes).toEqual([1, 2, 3, 4]);
  });
});

describe('prefCodeを削除する処理の確認', () => {
  let initialState = {
    checkedPrefCodes: [] as number[],
  };

  test('空の場合は変更を加えない', () => {
    const action = { type: removePrefCode.type, payload: 1 };
    const state = prefecturesReducer(initialState, action);
    expect(state.checkedPrefCodes).toEqual([]);
  });

  test('削除対象のprefコードがない場合', () => {
    initialState = {
      checkedPrefCodes: [2, 3, 4],
    };

    const action = { type: removePrefCode.type, payload: 1 };
    const state = prefecturesReducer(initialState, action);

    expect(state.checkedPrefCodes).toEqual([2, 3, 4]);
  });
  test('削除対象のprefコードがある場合', () => {
    initialState = {
      checkedPrefCodes: [1, 2, 3, 4],
    };

    const action = { type: removePrefCode.type, payload: 1 };
    const state = prefecturesReducer(initialState, action);
    expect(state.checkedPrefCodes).toEqual([2, 3, 4]);
  });
});
