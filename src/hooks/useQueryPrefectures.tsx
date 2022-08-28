import { useQuery } from '@tanstack/react-query';

import { GET_PREFECTURES_API_PATH } from '@/config';
import { axios } from '@/lib/axios';
import { GetPrefecturesResponseData, Prefecture } from '@/types/types';

const getPrefectures = async () => {
  const { data } = await axios.get<GetPrefecturesResponseData>(
    `${GET_PREFECTURES_API_PATH}`
  );
  return data.result;
};

const useQueryPrefectures = () => {
  return useQuery<Prefecture[], Error>({
    queryKey: ['prefectures'],
    queryFn: getPrefectures,
    cacheTime: 30000,
    staleTime: 30000,
  });
};

export default useQueryPrefectures;
