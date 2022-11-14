import { ReactNode } from 'react';
import Link from 'next/link';

import { cx } from '../../../utils';

import styles from './HeaderLink.module.css';

interface HeaderLinkProps {
  children: ReactNode;
  selected: boolean;
  url: string;
}

export const HeaderLink = ({
  children,
  selected,
  url,
}: HeaderLinkProps): JSX.Element => (
  <li className={cx(styles.link, selected && styles.selected)}>
    <Link href={url}>{children}</Link>
  </li>
);
