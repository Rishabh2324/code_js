const binarySearch = require("../binarySearch");

test("returns index of target when present", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
});

test("returns -1 when target is not present", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
});

test("returns index of target in a single element array", () => {
  expect(binarySearch([1], 1)).toBe(0);
  expect(binarySearch([1], 2)).toBe(-1);
});

test("returns index of target when array has duplicates", () => {
  expect(binarySearch([1, 2, 2, 2, 3], 2)).toBe(1);
});
