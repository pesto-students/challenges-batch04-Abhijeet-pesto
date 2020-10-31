function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...moreArgs) => curried.apply(this, args.concat(moreArgs));
  };
}

export {
  curry,
};

// Refrenced from https://javascript.info/currying-partials
