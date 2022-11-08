import React, { ReactNode } from 'react';
import styles from './Header.module.css';

export interface HeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderProps): JSX.Element => (
  <div className={styles.Header}>{children}</div>
);

Header.defaultProps = {
  children: undefined,
};
