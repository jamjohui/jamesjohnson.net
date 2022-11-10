import { ReactNode, MouseEvent } from 'react';

import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
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
    {onClose && (
      <IconButton label="Close Menu" onClick={onClose}>
        <Icon glyph="close" />
      </IconButton>
    )}
    <h3 className={styles.srOnly}>{title}</h3>
    <ul className={styles.list}>{children}</ul>
  </nav>
);
