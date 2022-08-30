import { render, screen, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

test('render Header', () => {
  render(<Header />);
  expect(screen.getByText('RESAS APP')).toBeInTheDocument();
});
