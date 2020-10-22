function sqrt(number) {
  for (let i = 0; i * i <= number; i += 1) {
    if (i * i === number) {
      return i;
    }
  }
  return 'Not a perfect square';
}

function power(number, exponent) {
  return number ** exponent;
}

function round(number) {
  return number.toFixed(0);
}
// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};
