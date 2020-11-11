/* eslint-disable no-console */
import { throttle } from './throttle';

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('Should run properly for single call', () => {
    const print = (arg) => console.log(arg);
    const throttleFn = throttle(print, 5000);
    console.log = jest.fn();
    throttleFn('Hello World');
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  test('Should run only once for multiple calls', () => {
    const print = (arg) => console.log(arg);
    const throttleFn = throttle(print, 5000);
    console.log = jest.fn();
    throttleFn('Hello World');
    throttleFn('My World');
    throttleFn('Your World');
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Hello World');
  });
});
