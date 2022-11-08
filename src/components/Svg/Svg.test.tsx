import { render } from '@testing-library/react';

import { Svg } from './Svg';

describe('<Svg />', () => {
  it('renders an svg', () => {
    render(
      <Svg
        path="M61.62,0V36A25.62,25.62,0,1,1,36,10.38H56.19V0H36A36,36,0,1,0,72,36V0Z"
        viewbox="0 0 72 72"
      />
    );
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
