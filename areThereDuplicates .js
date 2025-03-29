// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// Frequecny pattern
function areThereDuplicates(...arr) {
  let count = {};
  for (const key of arr) {
    if (count[key]) {
      return false;
    }
    count[key] = 1;
  }
  return true;
}
// Multiple pointers pattern
function areThereDuplicates([...arr]) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    if (left === right) return false;
    left++;
    right--;
  }
  return true;
}
