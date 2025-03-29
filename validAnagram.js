// validate anagram
// steps
// 1. Take two input strings
// 2. Check string length of both the strings
// 3. Check both the strings are of same length ,if not return false
// 4. Create a frequency map of both the strings
// 5. Loop over one map and chek frequenchy of character in another map
// 6. If frequency of character mataches then it is a vali anagram

function validAnagram(strg1, strg2) {
    if (strg1.length !== strg2.length) return false;
    let letterFrequency = {};
    for (const key of strg1) {
      letterFrequency[key] = (letterFrequency[key] || 0) + 1;
    }
  
    for (const key of strg2) {
      if (!letterFrequency[key]) {
        return false;
      } else {
        letterFrequency[key] -= 1;
      }
    }
    return true;
  }
  