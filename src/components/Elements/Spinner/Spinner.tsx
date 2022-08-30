import ReactLoading from 'react-loading';

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <ReactLoading type="spin" color="#4b5563" height={'5%'} width={'5%'} />
    </div>
  );
};

export default Spinner;
