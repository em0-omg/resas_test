import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';

import { server } from '@/test/server';
import { prefecturesData } from '@/assets/dummyData';

import useQueryPrefectures from '../useQueryPrefectures';

describe('useQueryPrefectureのテスト', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  test('都道府県情報の取得', async () => {
    const { result, waitFor } = renderHook(() => useQueryPrefectures(), {
      wrapper,
    });
    await waitFor(() => !!result.current.data);
    expect(result.current.data).toEqual(prefecturesData);
  });
});
