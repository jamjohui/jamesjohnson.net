import { act, render, screen } from '@testing-library/react';

import { Header } from './Header';
import { MainMenu } from '../../config';

const MenuLinks = MainMenu.map((item) => item.label);

const openMenu = () => {
  const btn = screen.getByLabelText('Open Menu', {
    selector: 'button',
  });
  act(() => btn.click());
};

describe('<Header />', () => {
  beforeEach(() => render(<Header />));

  it('renders the logo', () => {
    const logo = document.querySelector('.logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the title', () => {
    const title = screen.getByRole('heading', {
      level: 2,
    });
    expect(title).toHaveTextContent('James Johnson');
  });

  it('renders the menu', () => {
    const menu = screen.getByRole('navigation');
    expect(menu).toHaveTextContent('Main Menu');
  });

  it('renders the menu links', () => {
    const links = screen.getAllByRole('link').map((item) => item.innerHTML);
    expect(links).toEqual(MenuLinks);
  });

  it('renders the menu button', () => {
    const btn = screen.getByLabelText('Open Menu', {
      selector: 'button',
    });
    expect(btn).toBeInTheDocument();
  });

  it('renders the close button', () => {
    const btn = screen.getByLabelText('Close Menu', {
      selector: 'button',
    });
    expect(btn).toBeInTheDocument();
  });

  it('the menu is closed by default', () => {
    const menu = screen.getByRole('navigation');
    expect(menu).toHaveClass('closed');
  });

  it('clicking the menu button opens the menu', () => {
    const btn = screen.getByLabelText('Open Menu', {
      selector: 'button',
    });
    act(() => btn.click());
    const menu = screen.getByRole('navigation');
    expect(menu).toHaveClass('open');
  });

  it('clicking the close button closes the menu', () => {
    openMenu();
    const btn = screen.getByLabelText('Close Menu', {
      selector: 'button',
    });
    act(() => btn.click());
    const menu = screen.getByRole('navigation');
    expect(menu).toHaveClass('closed');
  });
});
