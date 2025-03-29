function constructNote(message, letters) {
  if (message.length === 0) return false;
  if (message.length > 0 && letters.length === 0) return false;
  let count = {};
  for (let key of letters) {
    count[key] = (count[key] || 0) + 1;
  }
  console.log(count);

  for (let key of message) {
    if (!count[key]) return false;
    count[key]--;
  }
  return true;
}
console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
