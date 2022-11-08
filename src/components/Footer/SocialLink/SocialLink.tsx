import { Icon } from '../../Icon';
import { IconGlyph } from '../../../types';

import styles from './SocialLink.module.css';

interface SocialLinkProps {
  icon: IconGlyph;
  label: string;
  url: string;
}

export const SocialLink = ({
  icon,
  label,
  url,
}: SocialLinkProps): JSX.Element => (
  <li className={styles.listItem}>
    <a
      className={styles.link}
      href={url}
      rel="noreferrer noopener"
      target="_blank"
    >
      <Icon className={styles.icon} glyph={icon} />{' '}
      <span className={styles.srOnly}>{label}</span>
    </a>
  </li>
);
