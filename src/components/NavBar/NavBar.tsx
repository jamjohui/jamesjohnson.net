import { ReactNode } from 'react';

import styles from './NavBar.module.css';

export interface NavBarProps {
  /** Content to display */
  children: ReactNode;
}

/** The global page header */
export const NavBar = ({ children }: NavBarProps): JSX.Element => (
  <div className={styles.navBar}>{children}</div>
);
