import { ReactNode, MouseEvent } from 'react';

import styles from './IconButton.module.css';

export interface IconButtonProps {
  /** The icon to display */
  children: ReactNode;

  /** Label text */
  label: string;

  /** Handle user clicks */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/** Displays a clickable icon */
export const IconButton = ({
  children,
  label,
  onClick,
}: IconButtonProps): JSX.Element => (
  <button
    aria-label={label}
    className={styles.iconButton}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: undefined,
};
