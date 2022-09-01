import { BiErrorCircle } from 'react-icons/bi';
import styles from './AlertMessage.module.scss';
import { IconContext } from 'react-icons';

interface AlertMessageProps {
  isError: boolean;
  message: string;
}

const AlertMessage = ({ isError, message }: AlertMessageProps) => {
  return (
    <IconContext.Provider value={{ color: 'white', size: '20px' }}>
      {isError ? (
        <div className={styles['error-box']}>
          <BiErrorCircle />
          <p className={styles.message}>{message}</p>
        </div>
      ) : null}
    </IconContext.Provider>
  );
};

export default AlertMessage;
