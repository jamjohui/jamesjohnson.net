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
    aria-label={label}
    checked={checked}
    className={styles.switch}
    onChange={onChange}
    readOnly={!onChange}
    type="checkbox"
  />
);
