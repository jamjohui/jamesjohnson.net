import { useEffect, useState } from 'react';

import type { Theme } from '../types';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | undefined>();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    ['light', 'dark'].forEach((c) => body?.classList.remove(c));
    if (theme) {
      body?.classList.add(theme as string);
    }
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
