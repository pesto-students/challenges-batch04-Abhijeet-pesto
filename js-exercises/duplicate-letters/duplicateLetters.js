function duplicateLetters(...args) {
  return /(.).*\1/gi.test(args[0]) ? Math.max(
    ...Object.values(args[0].split('').reduce(
      (prev, curr) => {
        prev[curr] = (prev[curr] || 0) + 1; // eslint-disable-line no-param-reassign
        return prev;
      }, {}) // eslint-disable-line function-paren-newline, comma-dangle
    ) // eslint-disable-line function-paren-newline, comma-dangle
  ) : false;
}

export {
  duplicateLetters,
};
