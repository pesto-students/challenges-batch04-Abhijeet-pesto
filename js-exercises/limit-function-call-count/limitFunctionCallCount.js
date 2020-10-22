const limitFunctionCallCount = (fn, limit) => {
  let callCount = 0;
  return (...args) => {
    if (callCount === limit) {
      return null;
    }
    callCount += 1;
    return fn(...args);
  };
};

export {
  limitFunctionCallCount,
};
