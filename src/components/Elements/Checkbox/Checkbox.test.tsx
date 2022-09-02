import { render, screen, cleanup } from '@testing-library/react';

import { setup } from '@/test/test-utils';
import Checkbox from './Checkbox';

describe('チェックボックスコンポーネントの動作テスト', () => {
  test('チェックボックスがクリックされた時にonChangeイベントが呼ばれることの確認', async () => {
    const onChange = jest.fn();
    const { user } = setup(
      <Checkbox label={'A'} checked={false} value={1} onChange={onChange} />
    );

    const checkbox = screen.getByLabelText('A');
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('checkedがtrueで作られたチェックボックスはチェックが入っている', () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        label={'Checkbox A'}
        checked={true}
        value={1}
        onChange={onChange}
      />
    );

    const checkbox = screen.getByLabelText('Checkbox A');
    expect(checkbox).toBeChecked();
  });

  test('checkedがfalseで作られたチェックボックスはチェックが入っていない', () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        label={'Checkbox A'}
        checked={false}
        value={1}
        onChange={onChange}
      />
    );

    const checkbox = screen.getByLabelText('Checkbox A') as HTMLInputElement;
    expect(checkbox).not.toBeChecked();
  });
});
