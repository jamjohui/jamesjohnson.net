import { render, screen } from '@testing-library/react';

import { NavBar } from './NavBar';

describe('<NavBar />', () => {
  it('renders its children', () => {
    render(
      <NavBar>
        <h1>Title</h1>
      </NavBar>
    );

    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('Title');
  });
});
