import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import { server } from '@/test/server';
import PrefectureCheckboxes from './PrefectureCheckboxes';
import { store } from '@/store';
import { prefecturesData } from '@/assets/dummyData';
import { setup } from '@/test/test-utils';
import { clearCodes } from '@/slices/prefecturesSlice';

describe('都道府県チェックボックスコンポーネントのテスト', () => {
  beforeAll(() => {
    server.listen();
  });
  beforeEach(() => {
    store.dispatch(clearCodes());
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

  test('チェックボックスの生成', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    // チェックボックスが描写されるのを待つ
    await waitFor(() => screen.findAllByRole('checkbox'));

    // 全ての都道府県が描写されていることの確認
    const prefNames = prefecturesData.map((p) => p.prefName);
    prefNames.forEach((prefName) => {
      expect(screen.getByText(prefName)).toBeInTheDocument();
    });
  });

  test('チェックボックスのチェック', async () => {
    const { user } = setup(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );
    // チェックボックスが描写されるのを待つ
    await waitFor(() => screen.findAllByRole('checkbox'));

    const checkboxes = screen.getAllByRole('checkbox');

    // 1回チェックでstoreに入る
    await user.click(checkboxes[0]);
    // 2回チェックで一旦storeに入ったのち消える
    await user.dblClick(checkboxes[1]);
    const { prefectures } = store.getState();
    expect(prefectures.checkedPrefCodes).toEqual([1]);
  });
  test('チェックボックスを順に全てチェックしようとした時の挙動をテスト', async () => {
    const { user } = setup(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    // storeを初期化しておく

    // チェックボックスが描写されるのを待つ
    await waitFor(() => screen.findAllByRole('checkbox'));

    const checkboxes = screen.getAllByRole('checkbox');

    for (const checkbox of checkboxes) {
      await user.click(checkbox);
    }

    const { prefectures } = store.getState();

    // 10個までしか選択できない
    expect(prefectures.checkedPrefCodes).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
