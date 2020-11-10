function debounce(fn, timeInMs) {
  if (typeof (fn) !== 'function') {
    throw new Error(`Error: Got ${typeof (fn)}, in place of function`);
  }

  if (typeof (timeInMs) !== 'number') {
    throw new Error(`Error: Debounce time should be a number, ${typeof (timeInMs)} was supplied.`);
  }

  let timeout = setTimeout(() => fn(), timeInMs);
  return () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(), timeInMs);
    }
  };
}

export { debounce };
