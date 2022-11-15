import { screen, render } from '@testing-library/react';

import Projects from '../../pages/projects';

describe('<Projects />', () => {
  beforeEach(() => render(<Projects />));

  it('renders a heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Projects');
  });
});
