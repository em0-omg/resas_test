import { AppProvider } from '@/providers/app';
import Layout from '@/components/Layout/Layout';
import PrefectureCheckboxes from '@/features/prefectures/components/PrefectureCheckboxes/PrefectureCheckboxes';
import PopulationCompositionGraph from '@/features/population/components/PopulationCompositionGraph/PopulationCompositionGraph';

import './App.scss';
import AlertMessage from '@/features/alerts/components/AlertMessage/AlertMessage';

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <PrefectureCheckboxes />
        <AlertMessage />
        <PopulationCompositionGraph />
      </Layout>
    </AppProvider>
  );
};

export default App;
