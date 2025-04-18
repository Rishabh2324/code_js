function getMinMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    if (arr[end] < min) {
      min = arr[end];
    } else {
      start = end;
    }
    end++;
  }
  return [arr[end], arr[start]];
}

console.log(getMinMax([1, 2, 3, 4, 5])); // [1,5];
