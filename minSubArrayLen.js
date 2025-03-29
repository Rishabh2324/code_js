function minSubArrayLen(arr, n) {
  let start = 0;
  let end = 0;
  let target_sum = 0;
  let minLen = Infinity;
  while (end < arr.length) {
    target_sum += arr[end];
    end++;

    while (target_sum >= n) {
      minLen = Math.min(minLen, end - start);
      target_sum = target_sum - arr[start];
      start++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
