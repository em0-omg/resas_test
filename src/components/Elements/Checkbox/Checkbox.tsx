import styles from './Checkbox.module.scss';

interface CheckboxProps {
  labelText: string;
}

const Checkbox = ({ labelText }: CheckboxProps) => {
  return (
    <label className={styles.checkbox_label}>
      <input className={styles.checkbox_input} type="checkbox" />
      <span className={styles.checkbox_text}>{labelText}</span>
    </label>
  );
};

export default Checkbox;
