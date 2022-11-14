import { ReactNode, MouseEvent } from 'react';

import { cx } from '../../utils/cx';
import styles from './IconButton.module.css';

export interface IconButtonProps {
  /** The icon to display */
  children: ReactNode;

  /** CSS styling class */
  className?: string;

  /** Label text */
  label: string;

  /** Handle user clicks */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/** Displays a clickable icon */
export const IconButton = ({
  children,
  className,
  label,
  onClick,
}: IconButtonProps): JSX.Element => (
  <button
    aria-label={label}
    className={cx(styles.iconButton, className)}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
