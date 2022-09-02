import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';

import { server } from '@/test/server';
import PopulationCompositionGraph from './PopulationCompositionGraph';
import { populationData } from '@/assets/dummyData';
import { store } from '@/store';
import { clearCodes } from '@/slices/prefecturesSlice';

jest.mock('../LineChartView/LineChartView.tsx', () => {
  return {
    default: () => {
      return <div />;
    },
  };
});

describe('人口構成グラフ描写のコンポーネントのテスト', () => {
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
  test('ローディング中は表示されない', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PopulationCompositionGraph />
        </Provider>
      </QueryClientProvider>
    );

    const expectedLabels = populationData.data.map((d) => d.label);

    expectedLabels.forEach((label) => {
      expect(screen.queryByText(label)).not.toBeInTheDocument();
    });
  });

  test('グラフが4種類生成されることを確認', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PopulationCompositionGraph />
        </Provider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      screen.getAllByRole('heading');
    });

    const expectedLabels = populationData.data.map((d) => d.label);

    expectedLabels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
