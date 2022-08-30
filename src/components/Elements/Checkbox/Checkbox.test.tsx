import { render, screen, cleanup } from '@testing-library/react';

import { setup } from '@/test/test-utils';
import Checkbox from './Checkbox';

afterEach(cleanup);
test('チェックボックスがクリックされた時にhandleChangeAイベントが呼ばれる', async () => {
  const handleChangeA = jest.fn();
  const { user } = setup(
    <Checkbox label={'A'} checked={false} value={1} onChange={handleChangeA} />
  );

  const checkboxA = screen.getByLabelText('A');
  await user.click(checkboxA);
  expect(handleChangeA).toHaveBeenCalledTimes(1);
});

test('checkedがtrueで作られたチェックボックスはチェックが入っている', () => {
  const handleChangeA = jest.fn();
  render(
    <Checkbox
      label={'Checkbox A'}
      checked={true}
      value={1}
      onChange={handleChangeA}
    />
  );

  const checkboxA = screen.getByLabelText('Checkbox A');
  expect(checkboxA).toBeChecked();
});

test('checkedがfalseで作られたチェックボックスはチェックが入っていない', () => {
  const handleChangeA = jest.fn();
  render(
    <Checkbox
      label={'Checkbox A'}
      checked={false}
      value={1}
      onChange={handleChangeA}
    />
  );

  const checkboxA = screen.getByLabelText('Checkbox A') as HTMLInputElement;
  expect(checkboxA).not.toBeChecked();
});
