import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { setIsLoading } from '@/slices/loadingSlice';

import Layout from './Layout';

describe('Layoutコンポーネントのテスト', () => {
  test('グローバルなローディングステートがデフォルトのfalseの時は内容が表示される', () => {
    render(
      <Provider store={store}>
        <Layout>
          <h2>レイアウトテスト</h2>
        </Layout>
      </Provider>
    );

    expect(screen.getByText('レイアウトテスト')).toBeInTheDocument();
  });

  test('グローバルなローディングステートがtrueの時は内容が表示されない', () => {
    store.dispatch(setIsLoading(true));

    render(
      <Provider store={store}>
        <Layout>
          <h2>レイアウトテスト</h2>
        </Layout>
      </Provider>
    );

    expect(screen.queryByText('レイアウトテスト')).not.toBeInTheDocument();
  });
});
