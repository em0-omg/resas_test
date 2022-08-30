import { AppProvider } from '@/providers/app';
import Layout from '@/components/Layout/Layout';
import PrefectureCheckboxes from '@/features/prefectures/components/PrefectureCheckboxes/PrefectureCheckboxes';
import PrefectureCompositionGraph from '@/features/prefectures/components/PrefectureCompositionGraph/PrefectureCompositionGraph';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <PrefectureCheckboxes />
        <PrefectureCompositionGraph />
      </Layout>
    </AppProvider>
  );
};

export default App;
