import { flipArgs } from './flipArgs';

describe('sumFibsMemoized', () => {
  test('should return a function', () => {
    expect(typeof flipArgs()).toEqual('function');
  });

  test('should return reverse of argument', () => {
    const flip = flipArgs();
    expect(flip(1, 2, 3)).toEqual([3, 2, 1]);
    expect(flip('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
  });
});
