import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { store } from '@/store';

import ErrorMessage from './ErrorMessage';
import { setError } from '@/slices/errorSlice';

describe('ErrorMessageコンポーネントのテスト', () => {
  const message = 'エラーです';
  test('エラーが発生していないとき、何も表示されない', () => {
    render(
      <Provider store={store}>
        <ErrorMessage />
      </Provider>
    );
    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });
  test('エラーが発生している時、エラーの内容が表示される', () => {
    store.dispatch(setError('エラーです'));

    render(
      <Provider store={store}>
        <ErrorMessage />
      </Provider>
    );
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
