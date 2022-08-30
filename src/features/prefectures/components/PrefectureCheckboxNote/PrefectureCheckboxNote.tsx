import styles from './PrefectureCheckboxNote.module.scss';

const PrefectureCheckboxNote = () => {
  return (
    <div>
      <h3 className={styles.guide}>表示する都道府県を選択してください</h3>
      <ul className={styles.list}>
        <li className={styles.note}>
          ※ チェックがない場合はサンプルとして北海道のデータを表示します。
        </li>
        <li className={styles.note}>
          ※
          複数選択した場合は合算で表示されます。一度に選択できるのは10個の都道府県までです。
        </li>
      </ul>
    </div>
  );
};

export default PrefectureCheckboxNote;
