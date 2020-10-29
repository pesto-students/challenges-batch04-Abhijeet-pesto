const sumEvenArgs = (...args) => {
  const evenNumbers = args.filter(item => item % 2 === 0 && typeof (item) === 'number');
  if (evenNumbers.length > 0) {
    return evenNumbers.reduce((prev, curr) => prev + curr);
  }
  return 0;
};

export { sumEvenArgs };
