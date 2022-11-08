import { ReactNode } from 'react';

import styles from './Nav.module.css';

interface NavProps {
  children: ReactNode;
}

export const Nav = ({ children }: NavProps): JSX.Element => (
  <nav>
    <h2 className={styles.srOnly}>Social Media Links</h2>
    <ul className={styles.list}>{children}</ul>
  </nav>
);
