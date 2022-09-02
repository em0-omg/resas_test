import { screen, render } from '@testing-library/react';

import AlertMessage from './AlertMessage';

describe('AlertMessageコンポーネントのテスト', () => {
  const message = 'エラー発生';
  let isError: boolean;
  test('エラーが発生していない場合はエラーメッセージが表示されない', () => {
    isError = false;

    render(<AlertMessage isError={isError} message={message} />);

    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });

  test('エラーが発生している場合はエラーメッセージが表示される', () => {
    isError = true;

    render(<AlertMessage isError={isError} message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
