// 2.Write a recursive function to calculate the factorial of a number.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

const n = 3;
console.log(`The factorial of ${n} is ${factorial(n)}`);
