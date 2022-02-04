import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';
import { Toaster } from 'react-hot-toast';

import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Оплата мобильной связи</title>
        <meta charSet={'utf-8'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
      </Head>
      <Toaster
        position={'top-right'}
        toastOptions={{
          style: {
            padding: '20px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};
export default MyApp;
