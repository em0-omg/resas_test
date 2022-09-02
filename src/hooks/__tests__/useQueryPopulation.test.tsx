import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';

import { server } from '@/test/server';
import { populationData, populationDataMixed } from '@/assets/dummyData';

import useQueryPopulation from '../useQueryPopulation';
import { Provider } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

describe('useQueryPopulationのテスト', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });

  // react-queryのための設定を準備
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  // reduxを参照するための準備
  const prefecturesSliceEmpty = createSlice({
    name: 'prefectures',
    initialState: {
      checkedPrefCodes: [] as number[],
    },
    reducers: {
      addPrefCode: (state, action: PayloadAction<number>) => {
        state.checkedPrefCodes.push(action.payload);
        state.checkedPrefCodes = [...new Set(state.checkedPrefCodes)];
      },
      removePrefCode: (state, action: PayloadAction<number>) => {
        state.checkedPrefCodes = state.checkedPrefCodes.filter(
          (prefCode) => prefCode !== action.payload
        );
      },
    },
  });

  // reduxを参照するための準備
  const prefecturesSliceOneValue = createSlice({
    name: 'prefectures',
    initialState: {
      checkedPrefCodes: [1],
    },
    reducers: {
      addPrefCode: (state, action: PayloadAction<number>) => {
        state.checkedPrefCodes.push(action.payload);
        state.checkedPrefCodes = [...new Set(state.checkedPrefCodes)];
      },
      removePrefCode: (state, action: PayloadAction<number>) => {
        state.checkedPrefCodes = state.checkedPrefCodes.filter(
          (prefCode) => prefCode !== action.payload
        );
      },
    },
  });

  const prefecturesSliceHaveValue = createSlice({
    name: 'prefectures',
    initialState: {
      checkedPrefCodes: [1, 2, 3, 4],
    },
    reducers: {
      addPrefCode: (state, action: PayloadAction<number>) => {
        state.checkedPrefCodes.push(action.payload);
        state.checkedPrefCodes = [...new Set(state.checkedPrefCodes)];
      },
      removePrefCode: (state, action: PayloadAction<number>) => {
        state.checkedPrefCodes = state.checkedPrefCodes.filter(
          (prefCode) => prefCode !== action.payload
        );
      },
    },
  });

  // storeを3パターン用意
  const storeEmpty = configureStore({
    reducer: {
      prefectures: prefecturesSliceEmpty.reducer,
    },
  });
  const storeOneValue = configureStore({
    reducer: {
      prefectures: prefecturesSliceOneValue.reducer,
    },
  });
  const storeHaveValue = configureStore({
    reducer: {
      prefectures: prefecturesSliceHaveValue.reducer,
    },
  });

  // wrapperを用意
  let wrapper;

  test('人口構成情報の取得においてデフォルトで北海道パラメータが設定されて値を返す', async () => {
    wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <Provider store={storeEmpty}>{children}</Provider>
      </QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useQueryPopulation(), {
      wrapper,
    });
    await waitFor(() => !!result.current.data);
    expect(result.current.data).toEqual(populationData);
  });

  test('人口構成情報の取得において北海道が選択された場合、その値を返す', async () => {
    wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <Provider store={storeOneValue}>{children}</Provider>
      </QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useQueryPopulation(), {
      wrapper,
    });
    await waitFor(() => !!result.current.data);
    expect(result.current.data).toEqual(populationData);
  });

  test('人口構成情報の取得において複数の都道府県が選択された場合、統合した値を返す', async () => {
    wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <Provider store={storeHaveValue}>{children}</Provider>
      </QueryClientProvider>
    );

    const { result, waitFor } = renderHook(() => useQueryPopulation(), {
      wrapper,
    });
    await waitFor(() => !!result.current.data);
    expect(result.current.data).toEqual(populationDataMixed);
  });
});
