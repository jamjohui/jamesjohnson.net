import { screen, render } from '@testing-library/react';

import Home from '../../pages/index';

describe('<Home />', () => {
  beforeEach(() => render(<Home />));

  it('renders a heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Home');
  });
});
