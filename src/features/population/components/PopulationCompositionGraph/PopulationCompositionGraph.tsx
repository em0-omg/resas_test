import useQueryPopulation from '@/hooks/useQueryPopulation';
import Spinner from '@/components/Elements/Spinner/Spinner';

import styles from './PopulationCompositionGraph.module.scss';
import LineChartView from '../LineChartView/LineChartView';

const PopulationCompositionGraph = () => {
  const { status, data } = useQueryPopulation();

  if (status === 'loading')
    return (
      <div>
        <Spinner />
      </div>
    );
  if (status === 'error')
    return (
      <div>
        <span>Error</span>
      </div>
    );

  return (
    <div className={styles.container}>
      {data.data.map((d) => (
        <div key={d.label} className={styles.graph}>
          <h2 className={styles.title}>{d.label}</h2>
          <LineChartView data={d} />
        </div>
      ))}
    </div>
  );
};

export default PopulationCompositionGraph;
