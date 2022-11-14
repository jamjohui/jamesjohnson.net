import { ChangeEvent } from 'react';

import { Switch } from '../../Switch';
import { Theme } from '../../../types';

import styles from './ThemeSwitch.module.css';

interface ThemeSwitchProps {
  theme: Theme;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ThemeSwitch = ({
  theme,
  onChange,
}: ThemeSwitchProps): JSX.Element => (
  <li className={styles.themeSwitch}>
    <Switch checked={theme === 'dark'} label="theme" onChange={onChange} />{' '}
    <span className={styles.switchLabel}>{theme}</span>
  </li>
);
