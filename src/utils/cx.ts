type ClassName = string | undefined;

/** Converts a list of CSS classes to a `className` string */
export const cx = (...args: ClassName[]): string =>
  args.filter((arg) => arg).join(' ');
