import { screen, render } from '@testing-library/react';
import PrefectureCheckboxNote from './PrefectureCheckboxNote';
describe('文言が正しく表示されているか確認', () => {
  test('タイトルが一つ、注意書きが二つ表示されることの確認', () => {
    render(<PrefectureCheckboxNote />);

    const title = screen.getByText('表示する都道府県を選択してください');
    expect(title).toBeInTheDocument();

    const note1 = screen.getByText(
      '※ チェックがない場合はサンプルとして北海道のデータを表示します。'
    );
    expect(note1).toBeInTheDocument();

    const note2 = screen.getByText(
      '※ 複数選択した場合は合算で表示されます。一度に選択できるのは10個の都道府県までです。'
    );
    expect(note2).toBeInTheDocument();
  });
});
