import { REGIONS } from '@/assets/region';
import Tab from '@/components/Tab/Tab';
import { useSelector } from '@/store';

import styles from './PrefectureRegionTabs.module.scss';

const PrefectureRegionTabs = () => {
  const checkedPrefCodes = useSelector(
    (state) => state.prefectures.checkedPrefCodes
  );
  return (
    <div className={styles.tabs}>
      {REGIONS.map((region) => (
        <Tab
          key={region.tab}
          label={region.name}
          tabIndex={region.tab}
          note={region.prefCodes.length.toString()}
          isContentsSelected={
            !![...checkedPrefCodes, ...region.prefCodes].filter(
              (code) =>
                checkedPrefCodes.includes(code) &&
                region.prefCodes.includes(code)
            ).length
          }
        />
      ))}
    </div>
  );
};

export default PrefectureRegionTabs;
