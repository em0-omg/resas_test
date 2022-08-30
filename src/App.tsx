import { AppProvider } from '@/providers/app';
import Layout from '@/components/Layout/Layout';
import PrefectureCheckboxes from '@/features/prefectures/components/PrefectureCheckboxes';
import PrefectureCompositionGraph from '@/features/prefectures/components/PrefectureCompositionGraph';

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
