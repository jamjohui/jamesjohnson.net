import { ReactNode } from 'react';

import styles from './NavTitle.module.css';

export interface NavTitleProps {
  /** Content to display */
  children: ReactNode;
}

/** Displays the site title on large screens, hides on small screens */
export const NavTitle = ({ children }: NavTitleProps): JSX.Element => (
  <h2 className={styles.title}>{children}</h2>
);
