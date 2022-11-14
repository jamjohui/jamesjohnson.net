import { useEffect, useState } from 'react';

import { Branding } from './Branding';
import { cx } from '../../utils';
import { HeaderLink } from './HeaderLink';
import { HeaderLink as IHeaderLink } from '../../interfaces';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { MainMenu } from '../../config';
import { Nav } from '../Nav';
import { ThemeSwitch } from './ThemeSwitch';
import { useTheme } from '../../hooks';

import styles from './Header.module.css';

export interface HeaderProps {
  /** URL of current page. Used to highlight the nav */
  route?: string;
}

/** The main page header */
export const Header = ({ route }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string | undefined>();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!route) {
      setIsSelected('');
    }
    const tabMatchingRoute = (item: IHeaderLink) => route === item.url;
    const tab = MainMenu.find(tabMatchingRoute);
    setIsSelected(tab?.id);
  }, [route]);

  const onOpenMenu = () => setIsOpen(true);

  const onCloseMenu = () => setIsOpen(false);

  const onChangeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className={styles.header}>
      <Branding />
      <Nav
        className={cx(styles.nav, isOpen ? styles.open : styles.closed)}
        onClose={onCloseMenu}
        title="Main Menu"
      >
        {MainMenu.map((item) => (
          <HeaderLink
            key={item.id}
            url={item.url}
            selected={isSelected === item.id}
          >
            {item.label}
          </HeaderLink>
        ))}
        <ThemeSwitch onChange={onChangeTheme} theme={theme} />
      </Nav>
      <IconButton
        className={cx(styles.menuBtn, isOpen ? styles.hidden : '')}
        label="Open Menu"
        onClick={onOpenMenu}
      >
        <Icon glyph="hamburger" />
      </IconButton>
    </header>
  );
};
