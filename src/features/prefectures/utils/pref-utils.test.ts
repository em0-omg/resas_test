import { convertPrefCodes } from './pref-utils';

describe('都道府県コードの配列を正しく処理して返すことの確認', () => {
  test('都道府県コードが空の場合', () => {
    const dummyInputCodes: number[] = [];
    const { prefCode, addArea } = convertPrefCodes(dummyInputCodes);
    expect(prefCode).toBe(1);
    expect(addArea).toBe(undefined);
  });

  test('都道府県コードが一つの場合', () => {
    const dummyInputCodes = [1];
    const { prefCode, addArea } = convertPrefCodes(dummyInputCodes);
    expect(prefCode).toBe(1);
    expect(addArea).toBe(undefined);
  });

  test('都道府県コードが複数与えられた場合', () => {
    const dummyInputCodes = [1, 2, 3, 4, 5];
    const { prefCode, addArea } = convertPrefCodes(dummyInputCodes);
    expect(prefCode).toBe(1);
    expect(addArea).toBe('2_,3_,4_,5_');
  });
});
