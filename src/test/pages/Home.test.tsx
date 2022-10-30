import { act, screen, render } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import Home from '../../pages/index';

const LightTheme = '(prefers-color-scheme: light)';

describe('<Home />', () => {
  beforeEach(() => {
    act(() => {
      const matchMedia = new MatchMediaMock();
      matchMedia.useMediaQuery(LightTheme);
      render(<Home />);
    });
  });

  it('renders welcome text', () => {
    const text = screen.getByRole('heading');
    expect(text).toHaveTextContent('Light Theme');
  });

  it('renders a switch', () => {
    const toggle = screen.getByLabelText('Theme');
    expect(toggle).toBeInTheDocument();
  });

  it('clicking the switch changes the theme', async () => {
    await act(async () => {
      const toggle = screen.getByLabelText('Theme');
      // Switch to dark theme ...
      await toggle.click();
      // ... and back to light theme
      await toggle.click();

      const light = screen.getByRole('heading');
      expect(light).toHaveTextContent('Light Theme');
    });
  });
});
