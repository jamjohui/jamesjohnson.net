import { ThemeKey, ThemeStore } from './ThemeStore';

describe('Theme', () => {
  it('should save the state of the theme to localStorage', () => {
    ThemeStore.set('light');
    expect(localStorage.getItem(ThemeKey)).toEqual('light');
  });

  it('should retreive the state of the theme from localStorage', () => {
    const theme = ThemeStore.get();
    expect(theme).toEqual('light');
  });
});
