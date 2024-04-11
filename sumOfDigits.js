// 3.Write a recursive function to find the sum of digits of a number.

function sumOfDigits(n, sum = 0) {
  // Base case: if the number becomes 0, return the sum
  if (n === 0) {
    return sum;
  }

  // Add the last digit of the number to the sum
  sum += n % 10;

  return sumOfDigits((n - (n % 10)) / 10, sum);
}

const number = 333;
console.log(`The sum of digits of ${number} is ${sumOfDigits(number)}`);
