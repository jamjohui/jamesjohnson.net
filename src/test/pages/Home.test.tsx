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
});
