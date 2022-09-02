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

import useResponsive from '@/hooks/useResponsive';

interface LineChartViewProps {
  data: {
    label: string;
    data: {
      year: number;
      value: number;
    }[];
  };
}

const LineChartView = ({ data }: LineChartViewProps) => {
  const { isDesktop } = useResponsive();

  return (
    <LineChart
      width={isDesktop ? 400 : 320}
      height={isDesktop ? 300 : 240}
      data={data.data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year">
        <Label value="年" offset={0} position="bottom" />
      </XAxis>
      <YAxis label={{ value: '人口数', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#82ca9d"
        aria-label="人口数"
      />
    </LineChart>
  );
};

export default LineChartView;
