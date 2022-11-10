import { useState } from 'react';
import Link from 'next/link';

import { cx } from '../../utils';
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
      <Icon className={styles.logo} glyph="logo" />
      <h2>James Johnson</h2>
      <Nav
        className={cx(styles.nav, open ? styles.open : styles.closed)}
        onClose={onClose}
        title="Main Menu"
      >
        {MainMenu.map((item) => (
          <li className={styles.link} key={item.id}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </Nav>
      <IconButton
        className={String(open && styles.hidden)}
        label="Open Menu"
        onClick={onOpen}
      >
        <Icon glyph="hamburger" />
      </IconButton>
    </header>
  );
};
