function sliceArray(array, sliceNum) {
  const slicedArray = array.splice(0, sliceNum);
  return [slicedArray, array];
}

function chunkArrayInGroups(array, chunkSize) {
  if (!Array.isArray(array)) {
    throw new Error(`Error: Expected array as 1st argument, got ${typeof (array)}`);
  }
  if (typeof (chunkSize) !== 'number') {
    throw new Error(`Error: Expected number as 2nd argument, got ${typeof (chunkSize)}`);
  }
  const outArray = [];
  let chunk;
  let remainingElements;
  do {
    [chunk, remainingElements] = sliceArray(array, chunkSize);
    outArray.push(chunk);
  } while (remainingElements.length >= chunkSize);
  if (remainingElements.length) {
    outArray.push(remainingElements);
  }
  return outArray;
}

export {
  chunkArrayInGroups,
};
