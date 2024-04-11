// 5.Write a recursive function to calculate the power of a number.

function power(base, exponent) {
  // Base case: if the exponent is 0, return 1
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

const base = 2;
const exponent = 2;
console.log(
  `${base} raised to the power of ${exponent} is ${power(base, exponent)}`
);
