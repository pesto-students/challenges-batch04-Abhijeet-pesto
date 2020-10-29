function diffArray(arr1, arr2) {
  const result = [...arr1, ...arr2];
  return result.filter(item => !(arr1.includes(item) && arr2.includes(item)));
}

export {
  diffArray,
};
