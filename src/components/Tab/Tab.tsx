import { useDispatch } from 'react-redux';
import { setShowIndex } from '@/slices/tabSlice';

import styles from './Tab.module.scss';
import { useSelector } from '@/store';

interface TabProps {
  label: string;
  tabIndex: number;
  note?: string;
  isContentsSelected?: boolean;
}

const Tab = ({
  label,
  tabIndex,
  note = '',
  isContentsSelected = false,
}: TabProps) => {
  const dispatch = useDispatch();
  const showTabIndex = useSelector((state) => state.tab.showIndex);

  return (
    <button
      className={
        showTabIndex === tabIndex ? styles['tab-selected'] : styles.tab
      }
      onClick={() => dispatch(setShowIndex(tabIndex))}
    >
      <span
        className={isContentsSelected ? styles['label-selected'] : styles.label}
      >
        {label}
      </span>
      <span className={styles.note}>{note ? `(${note})` : null}</span>
    </button>
  );
};

export default Tab;
