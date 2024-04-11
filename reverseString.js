// 4.Write a recursive function to reverse a string.

function reverseString(str, reversed = "", index = 0) {
  // Base case: if index reaches the end of the string, return the reversed string
  if (index === str.length) {
    return reversed;
  }

  // Recursive step: concatenate the current character at index with the reversed string
  return reverseString(str, str[index] + reversed, index + 1);
}

const string = "welcome";
console.log(`The reversed string of "${string}" is "${reverseString(string)}"`);
