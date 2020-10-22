function flipArgs(fn) {
  return (...args) => fn(...args.reverse());
}

export { flipArgs };
