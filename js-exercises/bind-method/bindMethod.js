// You can change the `args`
function bind(fn, obj) {
  return (...args) => fn.apply(obj, args);
}

module.exports = { bind };
