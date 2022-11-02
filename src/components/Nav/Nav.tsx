import { ReactNode } from 'react';

import styles from './Nav.module.css';

export interface NavProps {
  /** Content to display */
  children: ReactNode;

  /** Title of the nav */
  title: string;
}

/** The site's main navigation */
export const Nav = ({ children, title }: NavProps): JSX.Element => (
  <nav>
    <h3 className={styles.title}>{title}</h3>
    <ul className={styles.list}>{children}</ul>
  </nav>
);
