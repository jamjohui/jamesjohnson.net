import { render } from '@testing-library/react';

import { Logo } from './Logo';

describe('<Logo />', () => {
  it('renders the logo', () => {
    render(<Logo />);

    const logo = document.querySelector('.logo');
    expect(logo).toBeInTheDocument();
  });
});
