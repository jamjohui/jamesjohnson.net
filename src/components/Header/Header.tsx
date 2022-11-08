import { useState } from 'react';
import Link from 'next/link';

import { Icon } from '../Icon';
import { MainMenu } from '../../config';

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
      <nav className={open ? styles.open : styles.closed}>
        <h3>Main Menu</h3>
        <ul>
          {MainMenu.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button
          aria-label="Close Main Menu"
          onClick={onCloseClick}
          type="button"
        >
          Close
        </button>
      </nav>
      <button aria-label="Open Main Menu" onClick={onOpenClick} type="button">
        Open
      </button>
    </header>
  );
};
