function findAllDuplicates(arr) {
  let frequenchy = new Set();
  let duplicates = [];
  for (const el of arr) {
    if (!frequenchy.has(el)) {
      frequenchy.add(el);
    } else duplicates.push(el);
  }
  return duplicates;
}

console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // []));
