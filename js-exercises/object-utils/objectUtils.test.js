import {
  map,
  filter,
  invert,
  merge,
  all,
  some,
} from './objectUtils';

describe('Object Util test', () => {
  test('map function should modify obj based on callback', () => {
    const obj = {
      a: 10,
      b: 20,
    };
    const newObj = map(obj, ([key, val]) => [key.toUpperCase(), val * 10]);
    expect(newObj).toEqual({ A: 100, B: 200 });
  });

  test('filter function should filter out values', () => {
    const obj = {
      a: 10,
      b: 20,
      cd: 30,
      de: 50,
    };
    let newObj = filter(obj, true, (key) => key.length >= 2);
    expect(newObj).toEqual({ cd: 30, de: 50 });
    newObj = filter(obj, false, (value) => value <= 25);
    expect(newObj).toEqual({ a: 10, b: 20 });
  });

  test('merge function should work as expected', () => {
    const obj = {
      a: 10,
      b: 20,
    };
    const obj2 = {
      cd: 30,
      de: 50,
    };
    const newObj = merge(obj, obj2);
    expect(newObj).toEqual({
      a: 10,
      b: 20,
      cd: 30,
      de: 50,
    });
  });

  test('invert function works as expected', () => {
    const obj = {
      a: 10,
      b: 20,
      cd: 30,
      de: 50,
    };
    const newObj = invert(obj);
    expect(newObj).toEqual({
      10: 'a',
      20: 'b',
      30: 'cd',
      50: 'de',
    });
  });

  test('all function works as expected', () => {
    const obj = {
      a: 100,
      b: 200,
      cd: 300,
      de: 500,
    };
    const validator = (val) => val >= 100;
    expect(all(obj, validator)).toBe(true);
  });

  test('some function works as expected', () => {
    const obj = {
      a: 10,
      b: 20,
      cd: 300,
      de: 500,
    };
    const validator = (val) => val >= 100;
    expect(some(obj, validator)).toBe(true);
  });
});
