import { BiErrorCircle } from 'react-icons/bi';
import { useSelector } from '@/store';
import styles from './AlertMessage.module.scss';
import { IconContext } from 'react-icons';

const AlertMessage = () => {
  const { isError, message } = useSelector((state) => state.error);
  return (
    <IconContext.Provider value={{ color: 'white', size: '20px' }}>
      <div className={isError ? styles.show : styles.hide}>
        <BiErrorCircle />
        <p className={styles.message}>{message}</p>
      </div>
    </IconContext.Provider>
  );
};

export default AlertMessage;
