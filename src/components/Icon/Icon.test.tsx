import { render } from '@testing-library/react';

import { Icon } from './Icon';

describe('<Icon />', () => {
  it('renders an SVG icon', () => {
    render(<Icon glyph="github" />);
    const svg = document.querySelector('.github');
    expect(svg).toBeInTheDocument();
  });
});
