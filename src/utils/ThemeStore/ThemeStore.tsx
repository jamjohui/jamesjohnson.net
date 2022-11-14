import { Theme } from '../../types';

export const ThemeKey = 'theme';

/** Manages theme storage in the browser */
export const ThemeStore = {
  /** Saves the theme */
  set: (value: Theme) => localStorage.setItem(ThemeKey, value),

  /** Loads the theme */
  get: (): Theme | null => {
    const theme = localStorage.getItem(ThemeKey);
    if (!theme) return null;
    return theme as Theme;
  },
};
