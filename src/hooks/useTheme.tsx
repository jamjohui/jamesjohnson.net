import { useEffect, useState } from 'react';

import type { Theme } from '../types';
import { ThemeStore } from '../utils';

/** Queries and sets the current site theme */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | undefined>();

  useEffect(() => {
    const savedTheme = ThemeStore.get();
    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    ['light', 'dark'].forEach((c) => body?.classList.remove(c));
    if (theme) {
      body?.classList.add(theme as string);
      ThemeStore.set(theme);
    }
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
