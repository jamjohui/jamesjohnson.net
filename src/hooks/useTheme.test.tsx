import { useEffect } from 'react';
import { act, render, screen } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import type { Theme } from '../types/Theme';
import { ThemeStore } from '../utils';
import { useTheme } from './useTheme';

const LightTheme = '(prefers-color-scheme: light)';
const DarkTheme = '(prefers-color-scheme: dark)';

interface TestHarnessProps {
  newTheme?: Theme;
}

const TestHarness = ({ newTheme }: TestHarnessProps): JSX.Element => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (newTheme) {
      setTheme?.(newTheme);
    }
  }, [newTheme, setTheme]);

  return <p data-testid="theme">{theme}</p>;
};

TestHarness.defaultProps = {
  newTheme: undefined,
};

let matchMedia: MatchMediaMock;

describe('useTheme', () => {
  beforeEach(() => {
    matchMedia = new MatchMediaMock();
    matchMedia.useMediaQuery(LightTheme);
  });

  afterEach(() => {
    matchMedia.clear();
    localStorage.clear();
  });

  it('defaults to the os theme when set to light', async () => {
    act(() => {
      render(<TestHarness />);
    });

    const osTheme = screen.getByTestId('theme');
    expect(osTheme).toHaveTextContent('light');
  });

  it('defaults to the os theme when set to dark', async () => {
    act(() => {
      matchMedia.useMediaQuery(DarkTheme);
      render(<TestHarness />);
    });

    const osTheme = screen.getByTestId('theme');
    expect(osTheme).toHaveTextContent('dark');
  });

  // eslint-disable-next-line quotes
  it("defaults to the user's saved theme no regardless of os theme", () => {
    act(() => {
      ThemeStore.set('dark');
      render(<TestHarness />);
    });

    const osTheme = screen.getByTestId('theme');
    expect(osTheme).toHaveTextContent('dark');
  });

  it('adds a class to the `body` el to change the theme', () => {
    act(() => {
      render(<TestHarness newTheme="dark" />);
    });

    const body = document.querySelector('body');
    expect(body).toHaveClass('dark');
  });

  it('has only one theme class on the `body` el', () => {
    act(() => {
      render(<TestHarness newTheme="dark" />);
      matchMedia.useMediaQuery(LightTheme);
    });

    const body = document.querySelector('body');
    expect(body?.classList.length).toEqual(1);
  });

  it('setting the theme saves it to localStorage', () => {
    act(() => {
      render(<TestHarness newTheme="dark" />);
    });

    const theme = ThemeStore.get();
    expect(theme).toEqual('dark');
  });
});
