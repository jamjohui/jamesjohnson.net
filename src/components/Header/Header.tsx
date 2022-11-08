import { useState } from 'react';
import Link from 'next/link';

import { Icon } from '../Icon';
import { MainMenu } from '../../config';
import { Nav } from '../Nav';

import styles from './Header.module.css';

export const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const onOpenClick = () => {
    setOpen(true);
  };

  const onCloseClick = () => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <Icon glyph="logo" />
      <h2>James Johnson</h2>
      <Nav
        className={open ? styles.open : styles.closed}
        onClose={onCloseClick}
        title="Main Menu"
      >
        {MainMenu.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </Nav>
      <button aria-label="Open Menu" onClick={onOpenClick} type="button">
        Open
      </button>
    </header>
  );
};
