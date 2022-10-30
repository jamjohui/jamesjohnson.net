import { render, screen } from '@testing-library/react';

import { Switch } from './Switch';

describe('<Switch />', () => {
  it('renders a checkbox under the hood', () => {
    render(<Switch />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('is unchecked by default', () => {
    render(<Switch />);

    const toggle = screen.getByRole('checkbox') as HTMLInputElement;
    expect(toggle.checked).toBeFalsy();
  });

  it('clicking it sets it to checked', () => {
    render(<Switch />);

    const toggle = screen.getByRole('checkbox') as HTMLInputElement;
    toggle.click();
    expect(toggle.checked).toBeTruthy();
  });

  it('clicking it sends an `onChange` event', () => {
    const changeFunc = jest.fn();
    render(<Switch onChange={changeFunc} />);

    const toggle = screen.getByRole('checkbox') as HTMLInputElement;
    toggle.click();
    expect(changeFunc).toBeCalled();
  });

  it('adding the `checked` prop sets it to checked', () => {
    render(<Switch checked />);

    const toggle = screen.getByRole('checkbox') as HTMLInputElement;
    expect(toggle.checked).toBeTruthy();
  });

  it('it sets the aria-label role when the `label` prop is set', () => {
    render(<Switch label="toggle" />);
    expect(screen.getByLabelText('toggle')).toBeInTheDocument();
  });
});
