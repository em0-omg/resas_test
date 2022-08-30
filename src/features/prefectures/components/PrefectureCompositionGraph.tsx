import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import useQueryPopulation from '@/hooks/useQueryPopulation';

import styles from './PrefectureCompositionGraph.module.scss';

const PrefectureCompositionGraph = () => {
  const { status, data } = useQueryPopulation();

  if (status === 'loading')
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  if (status === 'error')
    return (
      <div>
        <span>Error</span>
      </div>
    );

  const totalData = data.data.find((pop) => pop.label === '総人口');

  if (!totalData) {
    return (
      <div>
        <span>Error</span>
      </div>
    );
  }

  console.log(data);

  return (
    <>
      <h2 className={styles.title}>都道府県別の総人口構成グラフ</h2>
      <LineChart
        width={800}
        height={400}
        data={totalData.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </>
  );
};

export default PrefectureCompositionGraph;
