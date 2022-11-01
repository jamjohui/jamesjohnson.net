import { render } from '@testing-library/react';

import { Icon } from './Icon';

describe('<Header />', () => {
  it('renders an svg by default', () => {
    render(<Icon />);

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('changes the rendered svg based on the `glyph` property', () => {
    render(<Icon glyph="close" />);

    const svg = document.querySelector('.iconClose');
    expect(svg).toBeInTheDocument();
  });

  it('can be styled with the `className` property', () => {
    render(<Icon glyph="hamburger" className="icon" />);

    const svg = document.querySelector('svg');
    expect(svg).toHaveClass('icon');
  });
});
