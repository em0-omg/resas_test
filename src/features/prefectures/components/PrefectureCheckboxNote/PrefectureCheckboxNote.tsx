import styles from './PrefectureCheckboxNote.module.scss';

const PrefectureCheckboxNote = () => {
  return (
    <div>
      <h3 className={styles.guide}>表示する都道府県を選択してください</h3>
      <p className={styles.note}>
        ※ チェックがない場合はサンプルとして北海道のデータを表示します。
      </p>
      <p className={styles.note}>※ 複数選択した場合は合算で表示されます。</p>
    </div>
  );
};

export default PrefectureCheckboxNote;
