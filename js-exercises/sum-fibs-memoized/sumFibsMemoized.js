function sumFibs(num) {
  if (num <= 0) return 0;
  const fibArr = [1, 1];
  let input = num.valueOf();
  while (input > 0) {
    const newNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    if (newNum <= num) {
      fibArr.push(newNum);
    } else {
      break;
    }
    input -= 1;
  }
  return fibArr.filter(number => number % 2 !== 0).reduce((prev, curr) => prev + curr);
}

function cacheFunction(sumFibsFn) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    const result = sumFibsFn(n);
    cache[n] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
