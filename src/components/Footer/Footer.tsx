import { Copyright } from './Copyright';
import { FooterLinks } from './FooterLinks';
import { Nav } from './Nav';
import { SocialLink } from './SocialLink';

import styles from './Footer.module.css';

/** The global page footer */
export const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <Copyright />
    <Nav>
      {FooterLinks.map((item) => (
        <SocialLink
          key={item.id}
          icon={item.icon}
          label={item.label}
          url={item.url}
        />
      ))}
    </Nav>
  </footer>
);
