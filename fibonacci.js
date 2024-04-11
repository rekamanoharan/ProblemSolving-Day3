// 1.Write a recursive function to calculate the nth Fibonacci number.

function fibonacci(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (n in memo) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

const n = 2;
console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}`);
