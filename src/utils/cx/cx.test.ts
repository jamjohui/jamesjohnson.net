import { cx } from './cx';

describe('cx', () => {
  it('concantenates an array of strings', () => {
    expect(cx('one', 'two', 'three')).toBe('one two three');
  });

  it('returns an empty string if there are no arguments', () => {
    expect(cx()).toBe('');
  });

  it('omits undefined and null arguments', () => {
    expect(cx('one', undefined, 'two', null)).toBe('one two');
  });

  it('omits false arguments', () => {
    expect(cx('one', false, 'two', undefined)).toBe('one two');
  });
});
