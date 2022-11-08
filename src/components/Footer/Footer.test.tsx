import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('<Footer />', () => {
  beforeEach(() => render(<Footer />));

  it('renders the copyright notice', () => {
    const text = screen.getByText('© 2022 James Johnson');
    expect(text).toBeInTheDocument();
  });

  it('renders the social media nav', () => {
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveTextContent('Social Media Links');
  });

  it('renders the github link', () => {
    const link = screen.getByText('Github', {
      selector: 'span',
    });
    expect(link).toBeInTheDocument();
  });

  it('renders the github icon', () => {
    const icon = document.querySelector('.github');
    expect(icon).toBeInTheDocument();
  });

  it('renders the linkedin link', () => {
    const link = screen.getByText('LinkedIn', {
      selector: 'span',
    });
    expect(link).toBeInTheDocument();
  });

  it('renders the linkedin icon', () => {
    const icon = document.querySelector('.linkedin');
    expect(icon).toBeInTheDocument();
  });
});
