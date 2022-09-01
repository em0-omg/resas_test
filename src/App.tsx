import { AppProvider } from '@/providers/app';
import Layout from '@/components/Layout/Layout';
import PrefectureCheckboxes from '@/features/prefectures/components/PrefectureCheckboxes/PrefectureCheckboxes';
import PopulationCompositionGraph from '@/features/population/components/PopulationCompositionGraph/PopulationCompositionGraph';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <PrefectureCheckboxes />
        <PopulationCompositionGraph />
      </Layout>
    </AppProvider>
  );
};

export default App;
