function throttle(fn, timeInMs) {
  if (typeof (fn) !== 'function') {
    throw new Error(`Error: Got ${typeof (fn)}, in place of function`);
  }

  if (typeof (timeInMs) !== 'number') {
    throw new Error(`Error: Throttle time should be a number, ${typeof (timeInMs)} was supplied.`);
  }

  let timeout;
  return (...args) => {
    if (timeout) {
      return;
    }
    timeout = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timeout);
    }, timeInMs);
  };
}

export { throttle };
