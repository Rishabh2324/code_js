function getMinMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    if (min < arr[end]) {
      min = arr[end];
      end++;
    } else {
      start = end;
      max = arr[start];
    }
  }
  return [arr[end], arr[start]];
}

console.log(getMinMax([1, 2, 3, 4, 5])); // [1,5];
