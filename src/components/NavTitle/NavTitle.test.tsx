import { render, screen } from '@testing-library/react';

import { NavTitle } from './NavTitle';

describe('<Header />', () => {
  it('renders the title', () => {
    render(<NavTitle>James Johnson</NavTitle>);

    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('James Johnson');
  });
});
