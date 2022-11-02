type ClassName = string | undefined | null | false;

/** Converts a list of CSS classes to a `className` string */
export const cx = (...args: ClassName[]): string =>
  args.filter((arg) => arg).join(' ');
