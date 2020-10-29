function removeFalsyValues(array) {
  if (Array.isArray(array)) {
    return array.filter(item => item && true);
  }
  throw new Error(`Error: Expected array, got ${typeof (array)}`);
}

export {
  removeFalsyValues,
};
