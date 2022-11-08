export interface SvgProps {
  /** CSS styling class */
  className?: string;

  /** The SVG image data */
  path: string;

  /** Size of the SVG */
  viewbox: string;
}

/** Renders an SVG image */
export const Svg = ({ className, path, viewbox }: SvgProps): JSX.Element => (
  <svg
    className={className}
    viewBox={viewbox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} />
  </svg>
);

Svg.defaultProps = {
  className: undefined,
};
