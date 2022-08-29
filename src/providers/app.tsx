import * as React from 'react';
import { Provider } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { store } from '@/store';
import { firebaseConfig } from '@/lib/firebase';
import { queryClient } from '@/lib/react-query';
import Spinner from '@/components/Elements/Spinner/Spinner';

type AppProviderProps = {
  children: React.ReactNode;
};

initializeApp(firebaseConfig);

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Suspense>
  );
};
