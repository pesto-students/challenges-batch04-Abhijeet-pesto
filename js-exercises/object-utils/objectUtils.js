function map(obj, callBack) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => callBack([key, value])),
  );
}

function filter(obj, filterOnKeys, callBack) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      if (filterOnKeys) return callBack(key);
      return callBack(value);
    }),
  );
}

function merge(...args) {
  return Object.assign({}, ...args);
}

function all(obj, callBack) {
  return Object.values(obj).every(value => callBack(value));
}

function invert(obj) {
  const validator = (val) => {
    const type = typeof (val);
    if (['function', 'object'].includes(type) || Array.isArray(val)) {
      return false;
    }
    return true;
  };
  if (all(obj, validator)) {
    return Object.fromEntries(
      Object.entries(obj).map(pair => pair.reverse()),
    );
  }
  return false;
}

function some(obj, callBack) {
  return Object.values(obj).some(value => callBack(value));
}

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
