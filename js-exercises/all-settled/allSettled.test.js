import { allSettled } from './allSettled';

describe('allSettled', () => {
  test('The function should return a Promise', () => {
    expect(allSettled([]) instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of objects from promises', () => {
    const p1 = Promise.resolve(33);
    const p2 = new Promise(resolve => setTimeout(() => resolve(66), 0));
    const p3 = 99;
    const p4 = Promise.reject(new Error('an error'));
    return expect(allSettled([p1, p2, p3, p4])).resolves.toEqual([
      { status: 'fulfilled', value: 33 },
      { status: 'fulfilled', value: 66 },
      { status: 'fulfilled', value: 99 },
      { status: 'rejected', reason: 'Error: an error' },
    ]);
  });

  test('Promise call returns correct status', () => {
    const p1 = Promise.resolve(3);
    const p2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    return allSettled([p1, p2]).then((results) => {
      let s1 = null;
      let s2 = null;
      [s1, s2] = results.map(result => result.status);
      expect(s1).toEqual('fulfilled');
      expect(s2).toEqual('rejected');
    });
  });
});
