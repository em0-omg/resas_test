import useQueryPopulation from '@/hooks/useQueryPopulation';
import { GetPopulationApiParameters } from '@/types/types';
import Spinner from '@/components/Elements/Spinner/Spinner';

const Population = () => {
  const params: GetPopulationApiParameters = {
    prefCode: 11,
    cityCode: 11362,
  };
  const { status, data } = useQueryPopulation(params);

  if (status === 'loading') {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div>
        <span>Error</span>
      </div>
    );
  }

  return (
    <div>
      <p>Population</p>
      {data?.data?.map((pop) => (
        <p key={pop.label}>{pop.label}</p>
      ))}
    </div>
  );
};

export default Population;
