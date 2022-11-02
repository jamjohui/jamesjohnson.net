import { render, screen } from '@testing-library/react';

import { Nav } from './Nav';

describe('<Nav />', () => {
  beforeEach(() => {
    render(
      <Nav title="main menu">
        <li>Item</li>
      </Nav>
    );
  });

  it('renders its children', () => {
    const item = screen.getByRole('listitem');
    expect(item).toHaveTextContent('Item');
  });

  it('contains a heading', () => {
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('main menu');
  });
});
