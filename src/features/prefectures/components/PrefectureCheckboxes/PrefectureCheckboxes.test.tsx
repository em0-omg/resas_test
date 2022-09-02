import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import { server } from '@/test/server';
import PrefectureCheckboxes from './PrefectureCheckboxes';
import { store } from '@/store';
import { prefecturesData } from '@/assets/dummyData';
import { setup } from '@/test/test-utils';
import { clearCodes } from '@/slices/prefecturesSlice';
import { setShowIndex } from '@/slices/tabSlice';
import { REGIONS } from '@/assets/region';

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

  test('チェックボックスの生成（東北）', async () => {
    const index = 1;
    store.dispatch(setShowIndex(index));
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    REGIONS.find((region) => region.tab === index)?.prefCodes.forEach(
      (prefCode) => {
        const pref = prefecturesData.find((pref) => pref.prefCode === prefCode);
        expect(screen.getByText(pref?.prefName || 'error')).toBeInTheDocument();
      }
    );
  });

  test('チェックボックスの生成(関東)', async () => {
    const index = 2;
    store.dispatch(setShowIndex(index));

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    REGIONS.find((region) => region.tab === index)?.prefCodes.forEach(
      (prefCode) => {
        const pref = prefecturesData.find((pref) => pref.prefCode === prefCode);
        expect(screen.getByText(pref?.prefName || 'error')).toBeInTheDocument();
      }
    );
  });

  test('チェックボックスの生成(中部)', async () => {
    const index = 3;
    store.dispatch(setShowIndex(index));

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    REGIONS.find((region) => region.tab === index)?.prefCodes.forEach(
      (prefCode) => {
        const pref = prefecturesData.find((pref) => pref.prefCode === prefCode);
        expect(screen.getByText(pref?.prefName || 'error')).toBeInTheDocument();
      }
    );
  });

  test('チェックボックスの生成(近畿)', async () => {
    const index = 4;
    store.dispatch(setShowIndex(index));

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    REGIONS.find((region) => region.tab === index)?.prefCodes.forEach(
      (prefCode) => {
        const pref = prefecturesData.find((pref) => pref.prefCode === prefCode);
        expect(screen.getByText(pref?.prefName || 'error')).toBeInTheDocument();
      }
    );
  });

  test('チェックボックスの生成(中国)', async () => {
    const index = 5;
    store.dispatch(setShowIndex(index));

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    REGIONS.find((region) => region.tab === index)?.prefCodes.forEach(
      (prefCode) => {
        const pref = prefecturesData.find((pref) => pref.prefCode === prefCode);
        expect(screen.getByText(pref?.prefName || 'error')).toBeInTheDocument();
      }
    );
  });

  test('チェックボックスの生成(四国)', async () => {
    const index = 5;
    store.dispatch(setShowIndex(index));

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    REGIONS.find((region) => region.tab === index)?.prefCodes.forEach(
      (prefCode) => {
        const pref = prefecturesData.find((pref) => pref.prefCode === prefCode);
        expect(screen.getByText(pref?.prefName || 'error')).toBeInTheDocument();
      }
    );
  });

  test('チェックボックスの生成(九州)', async () => {
    const index = 6;
    store.dispatch(setShowIndex(index));

    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    REGIONS.find((region) => region.tab === index)?.prefCodes.forEach(
      (prefCode) => {
        const pref = prefecturesData.find((pref) => pref.prefCode === prefCode);
        expect(screen.getByText(pref?.prefName || 'error')).toBeInTheDocument();
      }
    );
  });

  test('チェックボックスのチェック', async () => {
    const index = 6;
    store.dispatch(setShowIndex(index));

    const { user } = setup(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    const checkboxes = screen.getAllByRole('checkbox');

    // 1回チェックでstoreに入る
    await user.click(checkboxes[0]);
    // 2回チェックで一旦storeに入ったのち消える
    await user.dblClick(checkboxes[1]);
    const { prefectures } = store.getState();
    expect(prefectures.checkedPrefCodes).toEqual([36]);
  });
  test('チェックボックスを順に全てチェックしようとした時の挙動をテスト', async () => {
    let index = 5;
    store.dispatch(setShowIndex(index));

    const { user } = setup(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PrefectureCheckboxes />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => screen.findAllByRole('checkbox'));

    const checkboxes_tab5 = screen.getAllByRole('checkbox');

    for (const checkbox of checkboxes_tab5) {
      await user.click(checkbox);
    }

    index = 6;
    store.dispatch(setShowIndex(index));

    await waitFor(() => screen.findAllByRole('checkbox'));

    const checkboxes_tab6 = screen.getAllByRole('checkbox');

    for (const checkbox of checkboxes_tab6) {
      await user.click(checkbox);
    }

    const { prefectures } = store.getState();

    // 10個までしか選択できないことを確認する
    expect(prefectures.checkedPrefCodes).toEqual([
      31, 32, 33, 34, 35, 36, 37, 38, 39,
    ]);
  });
});
