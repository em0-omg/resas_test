import Population from '@/components/Population/Population';
import { AppProvider } from '@/providers/app';
import Layout from '@/components/Layout/Layout';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <Population />
      </Layout>
    </AppProvider>
  );
};

export default App;
