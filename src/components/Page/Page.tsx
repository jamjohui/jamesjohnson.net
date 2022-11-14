import { ReactNode } from 'react';
import styles from './Page.module.css';

import { Header } from '../Header';
import { Footer } from '../Footer';

export interface PageProps {
  /** Content to display */
  children?: ReactNode;

  /** The route of the current page */
  route?: string;
}

/** The main page template */
export const Page = ({ children, route }: PageProps): JSX.Element => (
  <div className={styles.container}>
    <Header route={route} />
    <main>{children}</main>
    <Footer />
  </div>
);
