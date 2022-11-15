import { screen, render } from '@testing-library/react';

import Contact from '../../pages/contact';

describe('<Contact />', () => {
  beforeEach(() => render(<Contact />));

  it('renders a heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Contact');
  });
});
