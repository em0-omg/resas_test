import { ChangeEvent } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  label: string;
  checked: boolean;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, checked, value, onChange }: CheckboxProps) => {
  return (
    <label className={styles.checkbox_label}>
      <input
        className={styles.checkbox_input}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkbox_text}>{label}</span>
    </label>
  );
};

export default Checkbox;
