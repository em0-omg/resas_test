import { useQuery } from '@tanstack/react-query';

import { GET_POPULATION_API_PATH } from '@/config';
import { axios } from '@/lib/axios';
import {
  GetPopulationResponseData,
  GetPopulationResult,
  GetPopulationApiParameters,
} from '@/types/types';

const getPopulation = async (params: GetPopulationApiParameters) => {
  const res = await axios.get<GetPopulationResponseData>(
    params.addArea
      ? `${GET_POPULATION_API_PATH}?cityCode=${params.cityCode}&prefCode=${params.prefCode}&addArea=${params.addArea}`
      : `${GET_POPULATION_API_PATH}?cityCode=${params.cityCode}&prefCode=${params.prefCode}`
  );
  return res.data.result;
};

const useQueryPopulation = (params: GetPopulationApiParameters) => {
  return useQuery<GetPopulationResult, Error>({
    queryKey: ['population', params],
    queryFn: () => getPopulation(params),
    cacheTime: 30000,
    staleTime: 30000,
  });
};

export default useQueryPopulation;
