import { useState } from 'react';

import { Branding } from './Branding';
import { cx } from '../../utils';
import { HeaderLink } from './HeaderLink';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { MainMenu } from '../../config';
import { Nav } from '../Nav';

import styles from './Header.module.css';

export const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <Branding />
      <Nav
        className={cx(styles.nav, open ? styles.open : styles.closed)}
        onClose={onClose}
        title="Main Menu"
      >
        {MainMenu.map((item) => (
          <HeaderLink key={item.id} url={item.url}>
            {item.label}
          </HeaderLink>
        ))}
      </Nav>
      <IconButton
        className={cx(styles.menuBtn, String(open && styles.hidden))}
        label="Open Menu"
        onClick={onOpen}
      >
        <Icon glyph="hamburger" />
      </IconButton>
    </header>
  );
};
