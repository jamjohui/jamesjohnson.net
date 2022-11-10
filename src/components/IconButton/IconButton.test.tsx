import { render, screen } from '@testing-library/react';

import { Icon } from '../Icon';
import { IconButton } from './IconButton';

const clickFunc = jest.fn();

describe('<Logo />', () => {
  beforeEach(() => {
    render(
      <IconButton className="button" label="icon button" onClick={clickFunc}>
        <Icon glyph="logo" />
      </IconButton>
    );
  });

  it('renders a button', () => {
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  it('renders an icon child', () => {
    const icon = document.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('sends a "click" event when clicked', () => {
    const btn = screen.getByRole('button');
    btn.click();
    expect(clickFunc).toBeCalled();
  });

  it('is properly labeled', () => {
    const label = screen.getByLabelText('icon button');
    expect(label).toBeInTheDocument();
  });

  it('is stylable', () => {
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('button');
  });
});
