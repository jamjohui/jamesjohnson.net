import { render, screen } from '@testing-library/react';

import { Nav } from './Nav';

describe('<NavBar />', () => {
  it('renders its children', () => {
    render(
      <Nav>
        <h1>Title</h1>
      </Nav>
    );

    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('Title');
  });
});
