import { ReactNode } from 'react';

import { cx } from '../../utils/cx';

import styles from './NavItem.module.css';

export interface NavItemProps {
  /** Content to display */
  children: ReactNode;

  /** Renders the item in its selected state */
  selected?: boolean;
}

/** A nav button */
export const NavItem = ({ children, selected }: NavItemProps): JSX.Element => (
  <li className={cx(styles.item, selected && styles.selected)}>{children}</li>
);

NavItem.defaultProps = {
  selected: false,
};
