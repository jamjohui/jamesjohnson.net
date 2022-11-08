import { useState } from 'react';

import { Icon } from '../Icon';

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
