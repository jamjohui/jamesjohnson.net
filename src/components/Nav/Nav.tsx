import { ReactNode, MouseEvent } from 'react';

import styles from './Nav.module.css';

interface NavProps {
  /** Links to display */
  children: ReactNode;

  /** Close event handler */
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;

  /** Title of the nav */
  title: string;
}

/** A menu list */
export const Nav = ({ children, onClose, title }: NavProps): JSX.Element => (
  <nav>
    <h2 className={styles.srOnly}>{title}</h2>
    <ul className={styles.list}>{children}</ul>
    {onClose && (
      <button aria-label="Close Menu" onClick={onClose} type="button">
        Close
      </button>
    )}
  </nav>
);
