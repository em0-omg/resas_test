import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import Checkbox from '@/components/Elements/Checkbox/Checkbox';
import useQueryPrefectures from '@/hooks/useQueryPrefectures';

import { useSelector } from '@/store';
import { addPrefCode, removePrefCode } from '@/slices/prefecturesSlice';
import PrefectureCheckboxNote from '@/features/prefectures/components/PrefectureCheckboxNote/PrefectureCheckboxNote';
import Spinner from '@/components/Elements/Spinner/Spinner';

import styles from './PrefectureCheckboxes.module.scss';

const PrefectureCheckboxes = () => {
  const { status, data } = useQueryPrefectures();
  const checkedPrefCodes = useSelector(
    (state) => state.prefectures.checkedPrefCodes
  );
  const dispatch = useDispatch();

  const checkPrefecture = (e: ChangeEvent<HTMLInputElement>) => {
    // 既に含まれている状態でのイベントの場合はチェックを外したと見なす
    if (checkedPrefCodes.includes(Number(e.target.value))) {
      dispatch(removePrefCode(Number(e.target.value)));
      // 含まれていない状態でのイベントの場合はチェックを入れたと見なす
    } else {
      dispatch(addPrefCode(Number(e.target.value)));
    }
  };

  if (status === 'loading')
    return (
      <div>
        <Spinner />
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
      <PrefectureCheckboxNote />
      <div className={styles.checkboxes}>
        {data?.map((prefecture) => (
          <Checkbox
            key={prefecture.prefCode}
            label={prefecture.prefName}
            value={prefecture.prefCode}
            onChange={checkPrefecture}
            checked={checkedPrefCodes.includes(prefecture.prefCode)}
          />
        ))}
      </div>
    </div>
  );
};

export default PrefectureCheckboxes;
