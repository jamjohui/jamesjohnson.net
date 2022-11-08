import { ChangeEvent } from 'react';

import styles from './Switch.module.css';

export interface SwitchProps {
  /** Sets the Switch to its `on` state */
  checked?: boolean;

  /** Sets label text */
  label?: string;

  /** Handles events when the Switch changes state */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

/** A toggle switch */
export const Switch = ({
  checked,
  label,
  onChange,
}: SwitchProps): JSX.Element => (
  <input
    onChange={onChange}
    className={styles.switch}
    type="checkbox"
    checked={checked}
    readOnly={!onChange}
    aria-label={label}
  />
);
