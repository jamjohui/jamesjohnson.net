import { ReactNode, MouseEvent } from 'react';

import styles from './Nav.module.css';

export interface NavProps {
  /** Links to display */
  children: ReactNode;

  /** CSS Styling class */
  className?: string;

  /** Close event handler */
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;

  /** Title of the nav */
  title: string;
}

/** A menu list */
export const Nav = ({
  children,
  className,
  onClose,
  title,
}: NavProps): JSX.Element => (
  <nav className={className}>
    <h3 className={styles.srOnly}>{title}</h3>
    <ul className={styles.list}>{children}</ul>
    {onClose && (
      <button aria-label="Close Menu" onClick={onClose} type="button">
        Close
      </button>
    )}
  </nav>
);
