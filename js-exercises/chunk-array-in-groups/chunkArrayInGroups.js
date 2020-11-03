function sliceArray(array, sliceNum) {
  const slicedArray = array.splice(0, sliceNum);
  return [slicedArray, array];
}

function chunkArrayInGroups(array, chunkSize) {
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
