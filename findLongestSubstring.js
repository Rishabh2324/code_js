function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let index_map = {};
  let longest_sum = 0;
  while (end < str.length) {
    if (index_map[str[end]] == null) {
      index_map[str[end]] = end;
      end++;
    } else {
      longest_sum = Math.max(longest_sum, end - start);
      start = index_map[str[end]];
      end = start + 1;
    }
  }
  return longest_sum;
}

console.log(findLongestSubstring(""));
