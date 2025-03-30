function collectionOddValues(arr) {
  if (arr.length === 0) return [];
  let newArr = arr[0] % 2 !== 0 ? [arr[0]] : [];
  return newArr.concat(collectionOddValues(arr.slice(1)));
}

console.log(collectionOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [1, 3, 5, 7, 9]

// Final Verdict:
// Use Pure Recursion when the problem is simple and you want elegant, one-liner-style code.

// Use the Helper Method when you care about performance or need to manage state/control through recursion.
