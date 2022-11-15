import { screen, render } from '@testing-library/react';

import About from '../../pages/about';

describe('<About />', () => {
  beforeEach(() => render(<About />));

  it('renders a heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('About');
  });
});
