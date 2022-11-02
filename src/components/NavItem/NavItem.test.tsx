import { render, screen } from '@testing-library/react';

import { NavItem } from './NavItem';

describe('<NavBar />', () => {
  it('renders its children', () => {
    render(<NavItem>Nav Item</NavItem>);

    const item = screen.getByRole('listitem');
    expect(item).toHaveTextContent('Nav Item');
  });

  it('renders the selected state when the `selected` prop is set', () => {
    render(<NavItem selected>Nav Item</NavItem>);

    const item = screen.getByRole('listitem');
    expect(item).toHaveClass('selected');
  });
});
