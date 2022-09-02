import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import Checkbox from '@/components/Elements/Checkbox/Checkbox';
import useQueryPrefectures from '@/hooks/useQueryPrefectures';

import { useSelector } from '@/store';
import { addPrefCode, removePrefCode } from '@/slices/prefecturesSlice';
import PrefectureCheckboxNote from '@/features/prefectures/components/PrefectureCheckboxNote/PrefectureCheckboxNote';
import Spinner from '@/components/Elements/Spinner/Spinner';
import { setError, clearError } from '@/slices/errorSlice';
import { ErrorMessages } from '@/assets/words';

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
    } else {
      // 含まれていない状態でのイベントの場合はチェックを入れたと見なす
      // その際、10個以上すでにチェックされているか確認し、10個以上ならばエラーを吐いて終了
      if (checkedPrefCodes.length >= 10) {
        dispatch(setError(ErrorMessages.CHECK_PREF_LIMIT_ERROR));
        return;
      }
      dispatch(addPrefCode(Number(e.target.value)));
    }
    dispatch(clearError());
  };

  if (status === 'loading')
    return (
      <div>
        <Spinner />
      </div>
    );

  if (status === 'error') {
    dispatch(setError(ErrorMessages.GET_PREFECTURES_ERROR));
    return (
      <div className={styles.container}>
        <PrefectureCheckboxNote />
      </div>
    );
  }

  // 無事に都道府県一覧を取得できた場合はエラーをクリア
  dispatch(clearError());

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
