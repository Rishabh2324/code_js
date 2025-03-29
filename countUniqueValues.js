// Count unique values
// Initialize two pointers left and right
// Iterate over the array
// If left is different from right then increment left else increment right
// the number of time left is incremented return i

function countUniqueValues(arr) {
  const arrLength = arr.length;
  if (arrLength === 0) return 0;
  let left = 0;
  for (let i = 1; i < arrLength; i++) {
    if (arr[left] != arr[i]) {
      left++;
      arr[left] = arr[i];
    }
  }
  return left;
}
