import { AppProvider } from '@/providers/app';
import Layout from '@/components/Layout/Layout';
import PrefectureCheckboxes from '@/features/prefectures/components/PrefectureCheckboxes/PrefectureCheckboxes';
import PopulationCompositionGraph from '@/features/population/components/PopulationCompositionGraph/PopulationCompositionGraph';
import ErrorMessage from '@/features/messages/components/ErrorMessage';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <PrefectureCheckboxes />
        <ErrorMessage />
        <PopulationCompositionGraph />
      </Layout>
    </AppProvider>
  );
};

export default App;
