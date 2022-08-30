import { useSelector } from '@/store';
import { ReactNode } from 'react';
import Spinner from '@/components/Elements/Spinner/Spinner';
import Header from '@/components/Header/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = useSelector((state) => state.loading);
  const { isError, message } = useSelector((state) => state.error);

  if (isLoading) {
    return (
      <main>
        <Header />
        <div className={styles.layout_container}>
          <Spinner />
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <Header />
        <div className={styles.layout_container}>
          <h2>Error</h2>
          <p>{message}</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Header />
      <div className={styles.layout_container}>{children}</div>
    </main>
  );
};

export default Layout;
