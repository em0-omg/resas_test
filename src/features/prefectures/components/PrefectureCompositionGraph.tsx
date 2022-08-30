import {
  CartesianGrid,
  Legend,
  Label,
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

  return (
    <>
      {data.data.map((d) => (
        <div key={d.label} className={styles.container}>
          <h2 className={styles.title}>{d.label}</h2>
          <LineChart
            width={1000}
            height={400}
            data={d.data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year">
              <Label value="年" offset={0} position="bottom" />
            </XAxis>
            <YAxis
              label={{ value: '人口数', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#82ca9d"
              aria-label="人口数"
            />
          </LineChart>
        </div>
      ))}
    </>
  );
};

export default PrefectureCompositionGraph;
