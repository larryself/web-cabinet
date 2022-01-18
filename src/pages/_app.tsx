import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/index.css';

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
    <Component {...pageProps} />
  </>
);
export default MyApp;
