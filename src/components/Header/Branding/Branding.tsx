import styles from './Branding.module.css';

import { Icon } from '../../Icon';

export const Branding = (): JSX.Element => (
  <>
    <Icon className={styles.logo} glyph="logo" />
    <h2>James Johnson</h2>
  </>
);
