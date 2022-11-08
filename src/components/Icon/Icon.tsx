import { cx } from '../../utils/cx';
import { Glyphs } from './Glyphs';
import type { IconGlyph } from '../../types';
import { Svg } from './Svg';

import styles from './Icon.module.css';

export interface IconProps {
  /** CSS styling class */
  className?: string;

  /** The icon to display  */
  glyph: IconGlyph;
}

/** An SVG Icon */
export const Icon = ({ className, glyph }: IconProps): JSX.Element => {
  const { style, path, viewbox } = Glyphs[glyph as keyof typeof Glyphs];
  return (
    <Svg
      className={cx(styles.icon, style, className)}
      path={path}
      viewbox={viewbox}
    />
  );
};
