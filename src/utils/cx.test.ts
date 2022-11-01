import { cx } from './cx';

describe('cx', () => {
  it('concantenates an array of strings', () => {
    expect(cx('one', 'two', 'three')).toBe('one two three');
  });

  it('returns an empty string if there are no arguments', () => {
    expect(cx()).toBe('');
  });

  it('omits undefined arguments', () => {
    expect(cx('one', undefined, 'two', undefined)).toBe('one two');
  });
});
