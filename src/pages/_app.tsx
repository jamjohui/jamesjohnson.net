import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Page } from '../components';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <Page route={router.route}>
      <Component {...pageProps} />
    </Page>
  );
};

export default MyApp;
