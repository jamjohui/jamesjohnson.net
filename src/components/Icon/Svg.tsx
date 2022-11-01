interface SvgProps {
  className: string;
  path: string;
  viewBox: string;
}

export const Svg = ({ className, path, viewBox }: SvgProps): JSX.Element => (
  <svg
    className={className}
    height="1em"
    width="1em"
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} />
  </svg>
);
