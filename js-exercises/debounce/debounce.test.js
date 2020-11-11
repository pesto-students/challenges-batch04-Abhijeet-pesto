import { debounce } from './debounce';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test('Should run properly for single call', () => {
    const callback = jest.fn();
    const debouncedFn = debounce(callback, 5000);
    debouncedFn();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Should run only once for multiple calls', () => {
    const callback = jest.fn();
    const debouncedFn = debounce(callback, 5000);
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
