import { cx } from '../../utils/cx';
import { Svg } from './Svg';

export interface IconProps {
  /** Styling class */
  className?: string;

  /** The icon to display */
  glyph?: 'close' | 'hamburger' | 'logo';
}

/** Displays a SVG icon */
export const Icon = ({ className, glyph }: IconProps): JSX.Element => {
  const Glyphs = {
    close: (
      <Svg
        className={cx('iconClose', className)}
        path="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
        viewBox="0 0 320 512"
      />
    ),
    hamburger: (
      <Svg
        className={cx('iconHamburger', className)}
        path="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        viewBox="0 0 448 512"
      />
    ),
    logo: (
      <Svg
        className={cx('iconLogo', className)}
        path="M61.62,0V36A25.62,25.62,0,1,1,36,10.38H56.19V0H36A36,36,0,1,0,72,36V0Z"
        viewBox="0 0 72 72"
      />
    ),
  };
  return Glyphs[glyph as keyof typeof Glyphs];
};

Icon.defaultProps = {
  className: undefined,
  glyph: 'hamburger',
};
