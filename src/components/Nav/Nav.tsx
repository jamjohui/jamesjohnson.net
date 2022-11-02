import { ReactNode } from 'react';

import styles from './Nav.module.css';

export interface NavProps {
  /** Content to display */
  children: ReactNode;
}

/** The site's main navigation */
export const Nav = ({ children }: NavProps): JSX.Element => (
  <nav className={styles.nav}>
    <ul className={styles.list}>{children}</ul>
  </nav>
);
