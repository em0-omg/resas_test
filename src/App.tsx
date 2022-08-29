import Header from './components/Header/Header';
import Prefectures from './components/Prefectures/Prefectures';
import Population from './components/Pupulation/Population';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <Prefectures /> */}
        <Population />
      </main>
    </div>
  );
};

export default App;
