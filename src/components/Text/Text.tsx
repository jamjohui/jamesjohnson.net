import { ReactNode } from 'react';

import styles from './Text.module.css';

export interface TextProps {
  children: ReactNode;
}

export const Text = ({ children }: TextProps): JSX.Element => (
  <p className={styles.text}>{children}</p>
);

export default Text;
