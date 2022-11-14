import { act, render, screen, waitFor } from '@testing-library/react';
import MatchMediaMock from 'jest-matchmedia-mock';

import { Header } from './Header';
import { MainMenu } from '../../config';

const LightTheme = '(prefers-color-scheme: light)';
const MenuLinks = MainMenu.map((item) => item.label);

const openMenu = () => {
  const btn = screen.getByLabelText('Open Menu', {
    selector: 'button',
  });
  act(() => btn.click());
};

describe('<Header />', () => {
  beforeEach(() => {
    act(() => {
      const matchMedia = new MatchMediaMock();
      matchMedia.useMediaQuery(LightTheme);
      render(<Header route="/" />);
    });
  });

  afterEach(() => {
    localStorage.clear();
  });

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

  it('renders the theme switch', () => {
    const toggle = screen.getByLabelText('theme');
    expect(toggle).toBeInTheDocument();
  });

  it('render the theme text', () => {
    const theme = screen.getByText('light');
    expect(theme).toBeInTheDocument();
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

  it('highlights the selected nav item', () => {
    const link = screen.getByText('Home', {
      selector: 'a',
    });
    const li = link.parentElement;
    expect(li).toHaveClass('selected');
  });

  it('clicking the theme toggle changes the theme', () => {
    const toggle = screen.getByLabelText('theme');
    act(() => toggle.click());
    const body = document.querySelector('body');
    expect(body).toHaveClass('dark');
  });

  it('clicking it again changes it back', async () => {
    const toggle = screen.getByLabelText('theme');
    await act(async () => {
      await toggle.click();
      await toggle.click();
    });
    const body = document.querySelector('body');
    await waitFor(() => expect(body).toHaveClass('light'));
  });
});
