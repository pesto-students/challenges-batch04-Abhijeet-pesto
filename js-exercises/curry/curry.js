function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args.concat(moreArgs));
  };
}

export {
  curry,
};

// Refrenced from https://javascript.info/currying-partials
