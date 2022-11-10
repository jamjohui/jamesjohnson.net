import { ReactNode } from 'react';
import Link from 'next/link';

import styles from './HeaderLink.module.css';

interface HeaderLinkProps {
  children: ReactNode;
  url: string;
}

export const HeaderLink = ({ children, url }: HeaderLinkProps): JSX.Element => (
  <li className={styles.link}>
    <Link href={url}>{children}</Link>
  </li>
);
