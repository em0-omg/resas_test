import { useQuery } from '@tanstack/react-query';

import { GET_POPULATION_API_PATH } from '@/config';
import { axios } from '@/lib/axios';
import {
  GetPopulationResponseData,
  GetPopulationResult,
  GetPopulationApiParameters,
} from '@/types/types';
import { useSelector } from '@/store';
import { convertPrefCodes } from '@/features/prefectures/utils/pref-utils';

const getPopulation = async (params: GetPopulationApiParameters) => {
  const res = await axios.get<GetPopulationResponseData>(
    params.addArea
      ? `${GET_POPULATION_API_PATH}?cityCode=${params.cityCode}&prefCode=${params.prefCode}&addArea=${params.addArea}`
      : `${GET_POPULATION_API_PATH}?cityCode=${params.cityCode}&prefCode=${params.prefCode}`
  );
  return res.data.result;
};

const useQueryPopulation = () => {
  const checkedPrefCodes = useSelector(
    (state) => state.prefectures.checkedPrefCodes
  );

  let params: GetPopulationApiParameters;
  if (!checkedPrefCodes.length) {
    params = {
      prefCode: 1,
      cityCode: '-',
      addArea: undefined,
    };
  } else {
    params = {
      prefCode: convertPrefCodes(checkedPrefCodes).prefCode,
      cityCode: '-',
      addArea: convertPrefCodes(checkedPrefCodes).addArea,
    };
  }

  return useQuery<GetPopulationResult, Error>({
    queryKey: ['population', params],
    queryFn: () => getPopulation(params),
    cacheTime: 30000,
    staleTime: 30000,
  });
};

export default useQueryPopulation;
