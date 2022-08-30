import { useDispatch } from 'react-redux';

import Checkbox from '@/components/Elements/Checkbox/Checkbox';
import useQueryPrefectures from '@/hooks/useQueryPrefectures';

import styles from './PrefectureCheckboxes.module.scss';
import { useSelector } from '@/store';
import React from 'react';
import { addPrefCode, removePrefCode } from '@/slices/prefecturesSlice';

const PrefectureCheckboxes = () => {
  const { status, data } = useQueryPrefectures();
  const checkedPrefCodes = useSelector(
    (state) => state.prefectures.checkedPrefCodes
  );
  const dispatch = useDispatch();

  const checkPrefecture = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <Checkbox
          key={prefecture.prefCode}
          label={prefecture.prefName}
          value={prefecture.prefCode}
          onChange={checkPrefecture}
          checked={checkedPrefCodes.includes(prefecture.prefCode)}
        />
      ))}
    </div>
  );
};

export default PrefectureCheckboxes;
