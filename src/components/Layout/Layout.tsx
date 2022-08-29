import { useSelector } from '@/store';
import { ReactNode } from 'react';
import Spinner from '@/components/Elements/Spinner/Spinner';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = useSelector((state) => state.loading);
  const { isError, message } = useSelector((state) => state.error);

  if (isLoading) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h2>Error</h2>
        <p>{message}</p>
      </main>
    );
  }

  return <main>{children}</main>;
};

export default Layout;
