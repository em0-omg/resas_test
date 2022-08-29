import { FC } from 'react';

import useQueryPopulation from '@/hooks/useQueryPopulation';
import { GetPopulationApiParameters } from '@/types/types';

const Population: FC = () => {
  const params: GetPopulationApiParameters = {
    prefCode: 11,
    cityCode: 11362,
  };
  const { status, data } = useQueryPopulation(params);

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
    <div>
      <p>Population</p>
      {data?.data?.map((pop) => (
        <p key={pop.label}>{pop.label}</p>
      ))}
    </div>
  );
};

export default Population;
