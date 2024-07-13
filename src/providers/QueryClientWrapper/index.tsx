import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode, useMemo } from 'react';

type Props = {
  children: ReactNode;
};
export const QueryClientWrapper: FC<Props> = ({ children }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retryOnMount: false,
            retry: 3,
          },
          mutations: {
            retry: 1,
          },
        },
      }),
    []
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
