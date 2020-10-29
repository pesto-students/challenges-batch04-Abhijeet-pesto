function diffArray(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    const result = [...arr1, ...arr2];
    return result.filter(item => !(arr1.includes(item) && arr2.includes(item)));
  }
  throw new Error(`Error: Expected arrays, got ${typeof (arr1)} and ${typeof (arr2)}`);
}

export {
  diffArray,
};
