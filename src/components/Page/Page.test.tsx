import { render, screen } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import { Page } from './Page';

const LightTheme = '(prefers-color-scheme: light)';

describe('<Page />', () => {
  beforeEach(() => {
    const matchMedia = new MatchMediaMock();
    matchMedia.useMediaQuery(LightTheme);
    render(<Page>Hello Page!</Page>);
  });

  it('renders the header', () => {
    const header = screen.getByRole('banner');
    expect(header).toHaveTextContent('James Johnson');
  });

  it('renders the footer', () => {
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('© 2022 James Johnson');
  });

  it('renders its content', () => {
    const content = screen.getByText('Hello Page!');
    expect(content).toBeInTheDocument();
  });
});
