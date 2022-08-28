import { FC } from 'react';

import useQueryPrefectures from '@/hooks/useQueryPrefectures';

const Prefectures: FC = () => {
  const { status, data } = useQueryPrefectures();

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
      <p>Prefectures</p>
      {data?.map((prefecture) => (
        <p key={prefecture.prefCode}>{prefecture.prefName}</p>
      ))}
    </div>
  );
};

export default Prefectures;
