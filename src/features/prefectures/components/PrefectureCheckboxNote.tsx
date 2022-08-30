import styles from './PrefectureCheckboxNote.module.scss';

const PrefectureCheckboxNote = () => {
  return (
    <p className={styles.note}>
      ※ チェックがない場合はサンプルとして北海道のデータを表示します。
    </p>
  );
};

export default PrefectureCheckboxNote;
