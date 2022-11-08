import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('<Header />', () => {
  it('renders its children', () => {
    render(<Header>Hello Header!</Header>);
    expect(screen.getByText('Hello Header!')).toBeInTheDocument();
  });
});
