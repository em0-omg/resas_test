import { useSelector } from '@/store';
import AlertMessage from '@/components/AlertMessage/AlertMessage';

const ErrorMessage = () => {
  const { isError, message } = useSelector((state) => state.error);

  return <AlertMessage isError={isError} message={message} />;
};

export default ErrorMessage;
