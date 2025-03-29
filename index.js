function findLongestSubstring(str) {
  let start = 0;
  let seen = {};
  let longest_sum = 0;
  for (let end = 0; end < str.length; end++) {
    const element = str[end];
    if (seen[element] > start) {
      start = seen[element] + 1;
    }
    seen[element] = end;
    longest_sum = Math.max(longest_sum, end - start + 1);
  }
  return longest_sum;
}

console.log(findLongestSubstring("thisishowwedoit"));
