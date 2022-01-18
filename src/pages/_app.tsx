import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';
import { Toaster } from 'react-hot-toast';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
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
  </>
);
export default MyApp;
