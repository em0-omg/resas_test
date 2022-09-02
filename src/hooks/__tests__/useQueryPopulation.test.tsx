import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { server } from '@/test/server';
import { populationData, populationDataMixed } from '@/assets/dummyData';

import useQueryPopulation from '../useQueryPopulation';
import { store } from '@/store';
import { addPrefCode } from '@/slices/prefecturesSlice';

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

  // reduxのための設定を準備
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );

  test('人口構成情報の取得においてデフォルトで北海道パラメータが設定されて値を返す', async () => {
    const { result, waitFor } = renderHook(() => useQueryPopulation(), {
      wrapper,
    });
    await waitFor(() => !!result.current.data);
    expect(result.current.data).toEqual(populationData);
  });

  test('人口構成情報の取得において北海道が選択された場合、その値を返す', async () => {
    store.dispatch(addPrefCode(1));

    const { result, waitFor } = renderHook(() => useQueryPopulation(), {
      wrapper,
    });
    await waitFor(() => !!result.current.data);
    expect(result.current.data).toEqual(populationData);
  });

  test('人口構成情報の取得において複数の都道府県が選択された場合、統合した値を返す', async () => {
    store.dispatch(addPrefCode(2));
    store.dispatch(addPrefCode(3));
    store.dispatch(addPrefCode(4));

    const { result, waitFor } = renderHook(() => useQueryPopulation(), {
      wrapper,
    });
    await waitFor(() => !!result.current.data);
    expect(result.current.data).toEqual(populationDataMixed);
  });
});
