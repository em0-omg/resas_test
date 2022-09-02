import { REGIONS } from '@/assets/region';
import { store } from '@/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import PrefectureRegionTabs from './PrefectureRegionTabs';

describe('地域選択タブコンポーネントのテスト', () => {
  test('各地域が全て表示される', () => {
    render(
      <Provider store={store}>
        <PrefectureRegionTabs />
      </Provider>
    );

    const regions = REGIONS.map((region) => region.name);

    regions.forEach((region) => {
      expect(screen.getByText(region)).toBeInTheDocument();
    });
  });
});
