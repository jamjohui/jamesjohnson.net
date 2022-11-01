import type { NextPage } from 'next';
import Head from 'next/head';

import { Switch } from '../components';
import { useTheme } from '../hooks/useTheme';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Head>
        <title>jamesjohnson.net</title>
      </Head>
      <main>
        <h1>{theme === 'light' ? 'Light' : 'Dark'} Theme</h1>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Theme <Switch onChange={onChange} />
        </label>
      </main>
    </>
  );
};

export default Home;
