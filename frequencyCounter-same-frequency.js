// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// Solution
// Convert both numbers to string
// Calculate frquency map of first number
// Iterate over frequncy of one map to another and check frquency of each digit
// If frequency does not matches return false

function sameFrequency(num1, num2) {
  const num1strg = num1.toString();
  const num2strg = num2.toString();
  if (num1strg.length !== num2strg.length) return false;
  let frequencyMap = {};
  for (const key of num1strg) {
    frequencyMap[key] = (frequencyMap[key] || 0) + 1;
  }

  for (const key of num2strg) {
    if (!frequencyMap[key]) return false;
    frequencyMap[key]--;
  }
  return true;
}
// Test cases
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
