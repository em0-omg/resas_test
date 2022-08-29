import { AppProvider } from '@/providers/app';
import Layout from '@/components/Layout/Layout';
import PrefectureCheckboxes from '@/features/prefectures/components/PrefectureCheckboxes';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <PrefectureCheckboxes />
      </Layout>
    </AppProvider>
  );
};

export default App;
