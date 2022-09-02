import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';

import { store } from '@/store';

import Tab from './Tab';
import { setup } from '@/test/test-utils';

describe('Tabコンポーネントのテスト', () => {
  test('レンダリングの確認', () => {
    render(
      <Provider store={store}>
        <Tab label="testtab" tabIndex={1} />
      </Provider>
    );
    expect(screen.getByText('testtab')).toBeInTheDocument();
  });
  test('noteの表示を確認', () => {
    render(
      <Provider store={store}>
        <Tab label="testtab" tabIndex={1} note="thisisnote" />
      </Provider>
    );
    expect(screen.getByText('(thisisnote)')).toBeInTheDocument();
  });

  test('下線の確認', () => {
    render(
      <Provider store={store}>
        <Tab label="testtab" tabIndex={0} />
      </Provider>
    );
    const tab = screen.getByRole('button');
    expect(tab).toHaveStyle({ borderBottomWidth: '2px' });
  });

  test('文字色の確認', () => {
    render(
      <Provider store={store}>
        <Tab label="testtab" tabIndex={0} isContentsSelected={true} />
      </Provider>
    );
    const label = screen.getByText('testtab');
    expect(label).toHaveStyle(`color: 'rgb(85, 182, 208)'`);
  });

  test('タブをクリックするとindexが設定される', async () => {
    const { user } = setup(
      <Provider store={store}>
        <Tab label="testtab" tabIndex={4} isContentsSelected={true} />
      </Provider>
    );

    const tab = screen.getByRole('button');

    await user.click(tab);

    const showIndex = store.getState().tab.showIndex;

    expect(showIndex).toBe(4);
  });
});
