import Population from '@/components/Pupulation/Population';
import { AppProvider } from '@/providers/app';
import Layout from '@/components/Layout/Layout';

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
