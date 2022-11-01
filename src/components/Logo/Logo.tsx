import { Icon } from '../Icon';
import styles from './Logo.module.css';

/** Displays the site logo */
export const Logo = (): JSX.Element => (
  <Icon className={styles.logo} glyph="logo" />
);
