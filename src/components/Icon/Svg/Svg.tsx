export interface SvgProps {
  className?: string;
  path: string;
  viewbox: string;
}

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
