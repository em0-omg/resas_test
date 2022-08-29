import Checkbox from '@/components/Elements/Checkbox/Checkbox';
import useQueryPrefectures from '@/hooks/useQueryPrefectures';

import styles from './PrefectureCheckboxes.module.scss';

const PrefectureCheckboxes = () => {
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
    <div className={styles.container}>
      {data?.map((prefecture) => (
        <Checkbox key={prefecture.prefCode} labelText={prefecture.prefName} />
      ))}
    </div>
  );
};

export default PrefectureCheckboxes;
