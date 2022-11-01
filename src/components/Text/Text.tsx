import { ReactNode } from 'react';

import styles from './Text.module.css';

export interface TextProps {
  /** Text to display */
  children: ReactNode;
}

/** Displays styled text */
export const Text = ({ children }: TextProps): JSX.Element => (
  <p className={styles.text}>{children}</p>
);

export default Text;
