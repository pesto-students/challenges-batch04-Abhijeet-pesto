import { flipArgs } from './flipArgs';

describe('sumFibsMemoized', () => {
  test('should return a function', () => {
    expect(typeof flipArgs()).toEqual('function');
  });

  test('should return reverse of argument', () => {
    const foo = (...args) => args;
    const filpFoo = flipArgs(foo);
    expect(filpFoo(1, 2, 3)).toEqual([3, 2, 1]);
    expect(filpFoo('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
  });
});
