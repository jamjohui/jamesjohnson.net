import type { NextPage } from 'next';
import Head from 'next/head';
import { useTheme } from '../hooks';

const Home: NextPage = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>jamesjohnson.net</title>
      </Head>
      <h1>{theme === 'light' ? 'Light' : 'Dark'} Theme</h1>
    </>
  );
};

export default Home;
