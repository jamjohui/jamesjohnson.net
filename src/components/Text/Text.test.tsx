import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('<Text />', () => {
  it('renders a paragraph by default', () => {
    render(<Text>test</Text>);

    const p = screen.getByText('test');
    expect(p).toBeInTheDocument();
  });
});
